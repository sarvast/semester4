const fs = require('fs');
const path = require('path');

const units = [1, 2, 3, 4, 5];
const subjects = [
    { 
        id: 'graphics', 
        searchKey: 'Computer Graphics', 
        fullTitle: 'Computer Graphics & Animation', 
        icon: 'fa-desktop',
        fileName: 'graphics.html' 
    },
    { 
        id: 'dbms', 
        searchKey: 'Database Management System', 
        fullTitle: 'Database Management System (DBMS)', 
        icon: 'fa-database',
        fileName: 'dbms.html' 
    },
    { 
        id: 'se', 
        searchKey: 'Software Engineering', 
        fullTitle: 'Software Engineering', 
        icon: 'fa-code',
        fileName: 'se.html' 
    },
    { 
        id: 'optimization', 
        searchKey: 'Optimization Techniques', 
        fullTitle: 'Optimization Techniques', 
        icon: 'fa-chart-line',
        fileName: 'optimization.html' 
    },
    { 
        id: 'math', 
        searchKey: 'Mathematics-III', 
        fullTitle: 'Mathematics-III', 
        icon: 'fa-calculator',
        fileName: 'math.html' 
    }
];

// Helper to extract content block corresponding to a subject
function extractNotes(html, searchKey) {
    // Find the header position
    const headerRegex = new RegExp(`<h3><i class="[^"]+"></i>\\s*${searchKey}.*?</h3>`, 'i');
    const match = headerRegex.exec(html);
    if (!match) return "";

    const headerIndex = match.index;
    // Find the start of "subject-content" sibling
    const contentStartMarker = '<div class="subject-content">';
    const startIdx = html.indexOf(contentStartMarker, headerIndex);
    
    if (startIdx === -1) return "";

    // Parse balanced divs to find the end
    let depth = 1;
    let currentIdx = startIdx + contentStartMarker.length;
    
    while (depth > 0 && currentIdx < html.length) {
        const nextDivStart = html.indexOf('<div', currentIdx);
        const nextDivEnd = html.indexOf('</div>', currentIdx);

        if (nextDivEnd === -1) break; // formatting error

        if (nextDivStart !== -1 && nextDivStart < nextDivEnd) {
            depth++;
            currentIdx = nextDivStart + 4;
        } else {
            depth--;
            currentIdx = nextDivEnd + 6;
        }
    }

    if (depth === 0) {
        // Return inner content of subject-content
        return html.substring(startIdx + contentStartMarker.length, currentIdx - 6);
    }
    return "";
}

// Helper to extract MCQs
function extractMCQs(html, subjectId) {
    const idStr = `id="${subjectId}-mcq"`;
    const startMatch = html.indexOf(idStr);
    if (startMatch === -1) return "";

    // Find the opening tag of this div. It's usually <div class="mcq-container" id="...">
    const tagStart = html.lastIndexOf('<div', startMatch);
    
    // Find content inside. simpler approach: finding the inner HTML between the first > after id and the matching closing div
    const openTagEnd = html.indexOf('>', startMatch);
    
    let depth = 1;
    let currentIdx = openTagEnd + 1;
    
    while (depth > 0 && currentIdx < html.length) {
        const nextDivStart = html.indexOf('<div', currentIdx);
        const nextDivEnd = html.indexOf('</div>', currentIdx);

        if (nextDivEnd === -1) break;

        if (nextDivStart !== -1 && nextDivStart < nextDivEnd) {
            depth++;
            currentIdx = nextDivStart + 4;
        } else {
            depth--;
            currentIdx = nextDivEnd + 6;
        }
    }

    if (depth === 0) {
        // Return inner content which contains .mcq-question blocks
        return html.substring(openTagEnd + 1, currentIdx - 6);
    }
    return "";
}

// Read Unit files
const unitContents = {};
units.forEach(u => {
    try {
        unitContents[u] = fs.readFileSync(`unit${u}.html`, 'utf8');
    } catch(e) {
        console.log(`Could not read unit${u}.html`);
        unitContents[u] = "";
    }
});

// Read Base Template (Unit 1 is fine, we will strip it)
let template = unitContents[1];

// Function to generate subject page
function generateSubjectPage(subject) {
    let subjectNotes = "";
    let subjectMCQs = "";

    units.forEach(u => {
        const notes = extractNotes(unitContents[u], subject.searchKey);
        if (notes.trim()) {
            subjectNotes += `
            <div class="unit-block">
                <h3 class="unit-header">Unit ${u}</h3>
                <div class="unit-content">
                    ${notes}
                </div>
            </div>`;
        }

        const mcqs = extractMCQs(unitContents[u], subject.id);
        if (mcqs.trim()) {
             // Optional: Add a separator for MCQs too?
             // subjectMCQs += `<h4 style="margin: 20px 0;">Unit ${u} MCQs</h4>`;
             subjectMCQs += mcqs;
        }
    });

    // Create the final HTML
    let newHtml = template;

    // 1. Update Title and Meta
    newHtml = newHtml.replace(/<title>.*?<\/title>/, `<title>${subject.fullTitle} - Complete Notes</title>`);
    newHtml = newHtml.replace(/Unit 1 Smart Preparation/g, `${subject.fullTitle} - Complete Smart Preparation`);
    
    // 2. Update Header/Hero
    newHtml = newHtml.replace(/Unit 1: Introduction to Subjects/g, subject.fullTitle);
    newHtml = newHtml.replace(/Overview of Graphics, DBMS, SE, Optimization, and Math./g, "Comprehensive Subject Notes (Unit 1 - 5) + Exam Focused MCQs");

    // 3. Replace Notes Section
    // We want to remove all existing subject-containers and replace with our single combined content
    // Find start of #notes section
    const notesSectionStart = newHtml.indexOf('id="notes"');
    const notesHeaderEnd = newHtml.indexOf('</h2>', notesSectionStart) + 5;
    
    // Find start of #mcq section (to know where notes end)
    const mcqSectionStart = newHtml.indexOf('id="mcq"');
    const prevDivEnd = newHtml.lastIndexOf('</div>', mcqSectionStart); // approximate end of last subject container

    // Construct new Notes HTML
    const newNotesSection = `
    <!-- Subject Notes -->
    <div class="subject-container" style="display:block;">
        <div class="subject-header active" style="cursor: default;">
            <h3><i class="fas ${subject.icon}"></i> ${subject.fullTitle}</h3>
        </div>
        <div class="subject-content active" style="max-height: none; padding: 2rem;">
            ${subjectNotes}
        </div>
    </div>`;

    // We can't easily rely on regex for the whole block replacement because of size.
    // Let's rely on wiping everything between the header and the PYQ/MCQ section.
    // Actually, looking at unit1 structure: 
    // <h2 ... id="notes">...</h2>
    // ... subject containers ...
    // <h2 ... id="mcq">...</h2>
    
    // So we replace everything between `notesHeaderEnd` and `mcqSectionStart` (minus the <h2> tag itself)
    // Be careful not to cut off the opening div of container if it exists before sections.
    // In unit1.html, subject-containers are siblings under .container
    
    // Let's find the Exact String range to replace.
    // From </h2> of id="notes" TO <h2 class="section-title" id="mcq">
    
    // Finding the exact start of the MCQ header formatting
    const nextSectionMarker = '<h2 class="section-title" id="mcq">';
    const cutStart = notesHeaderEnd;
    const cutEnd = newHtml.indexOf(nextSectionMarker);

    if (cutStart > 0 && cutEnd > 0) {
        newHtml = newHtml.substring(0, cutStart) + "\n" + newNotesSection + "\n" + newHtml.substring(cutEnd);
    }

    // 4. Replace MCQ Section
    // The MCQ section has tabs. We want to remove tabs and just show the relevant MCQs.
    const mcqHeaderEnd = newHtml.indexOf(nextSectionMarker) + nextSectionMarker.length;
    // Find end of MCQ section (start of PYQ section)
    const pyqMarker = 'id="pyq"';
    const pyqStart = newHtml.indexOf(pyqMarker);
    const mcqEnd = newHtml.lastIndexOf('<h2', pyqStart); // The h2 tag containing the marker is the start of next section

    const newMcqSectionContent = `
    <div class="mcq-section">
        <div class="score-display">
            <p>Your Score: <span id="score">0</span> out of <span id="total-questions">0</span></p>
            <button id="reset-btn" class="btn btn-secondary" style="padding: 8px 20px; margin-top: 10px;">Reset Quiz</button>
        </div>
        
        <!-- Only one container for this subject -->
        <div class="mcq-container active">
            ${subjectMCQs}
        </div>
        
        <div class="mcq-navigation">
            <button id="prev-btn" class="btn btn-secondary"><i class="fas fa-arrow-left"></i> Previous</button>
            <button id="next-btn" class="btn btn-primary">Next <i class="fas fa-arrow-right"></i></button>
        </div>
    </div>
    `;

    if (mcqHeaderEnd > 0 && mcqEnd > 0) {
         newHtml = newHtml.substring(0, mcqHeaderEnd) + "\n" + newMcqSectionContent + "\n" + newHtml.substring(mcqEnd);
    }
    
    // 5. Clean up Script
    // Remove tab switching logic
    newHtml = newHtml.replace(/document.querySelectorAll\('.mcq-tab'\).forEach\(tab => \{[\s\S]*?\}\);\s*\n/g, '');


    // 6. Navigation
    // Update Nav links to point to [Subject].html instead of Unit 1,2,3...
    // Or add them.
    const newNav = `
    <ul>
        <li><a href="index.html"><i class="fas fa-home"></i> Home</a></li>
        <li><a href="graphics.html" ${subject.id==='graphics'?'style="text-decoration:underline"':''}>Graphics</a></li>
        <li><a href="dbms.html" ${subject.id==='dbms'?'style="text-decoration:underline"':''}>DBMS</a></li>
        <li><a href="se.html" ${subject.id==='se'?'style="text-decoration:underline"':''}>SE</a></li>
        <li><a href="optimization.html" ${subject.id==='optimization'?'style="text-decoration:underline"':''}>Optimization</a></li>
        <li><a href="math.html" ${subject.id==='math'?'style="text-decoration:underline"':''}>Math</a></li>
    </ul>
    `;
    newHtml = newHtml.replace(/<ul>[\s\S]*?<\/ul>/, newNav);


    // Save
    fs.writeFileSync(subject.fileName, newHtml);
    console.log(`Generated ${subject.fileName}`);
}


subjects.forEach(sub => generateSubjectPage(sub));
