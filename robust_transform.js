const fs = require('fs');
const path = require('path');

const units = [1, 2, 3, 4, 5];
const subjects = {
    'graphics': {
        keywords: ['Computer Graphics', 'Graphics & Animation'],
        title: 'Computer Graphics & Animation',
        icon: 'fa-desktop',
        notes: [],
        mcqs: []
    },
    'dbms': {
        keywords: ['Database Management', 'DBMS'],
        title: 'Database Management System (DBMS)',
        icon: 'fa-database',
        notes: [],
        mcqs: []
    },
    'se': {
        keywords: ['Software Engineering'],
        title: 'Software Engineering',
        icon: 'fa-code',
        notes: [],
        mcqs: []
    },
    'optimization': {
        keywords: ['Optimization'],
        title: 'Optimization Techniques',
        icon: 'fa-chart-line',
        notes: [],
        mcqs: []
    },
    'math': {
        keywords: ['Mathematics', 'Math-III'],
        title: 'Mathematics-III',
        icon: 'fa-calculator',
        notes: [],
        mcqs: []
    }
};

// Function to find balanced closing div
function findClosingDiv(html, startIndex) {
    let depth = 1;
    let currentIdx = startIndex;

    while (depth > 0 && currentIdx < html.length) {
        const nextDivStart = html.indexOf('<div', currentIdx);
        const nextDivEnd = html.indexOf('</div>', currentIdx);

        if (nextDivEnd === -1) return -1; // unexpected end

        if (nextDivStart !== -1 && nextDivStart < nextDivEnd) {
            depth++;
            currentIdx = nextDivStart + 4;
        } else {
            depth--;
            currentIdx = nextDivEnd + 6;
        }
    }
    return currentIdx;
}

// Processing
units.forEach(u => {
    let html = "";
    try {
        html = fs.readFileSync(`unit${u}.html`, 'utf8');
    } catch (e) { console.log(`Skipping Unit ${u}`); return; }

    console.log(`Processing Unit ${u}...`);

    // 1. Extract Notes
    // Strategy: Find all <div class="subject-container">
    let searchIdx = 0;
    while (true) {
        const marker = '<div class="subject-container">';
        const start = html.indexOf(marker, searchIdx);
        if (start === -1) break;

        const end = findClosingDiv(html, start + marker.length);
        if (end === -1) { searchIdx = start + 1; continue; }

        const block = html.substring(start, end);
        searchIdx = end;

        // Identify Subject
        // Look inside the block for the header text
        // <div class="subject-header"> ... <h3> ... TEXT ... </h3>

        let identifiedSubject = null;
        for (const [key, data] of Object.entries(subjects)) {
            for (const kw of data.keywords) {
                if (block.includes(kw)) {
                    identifiedSubject = key;
                    break;
                }
            }
            if (identifiedSubject) break;
        }

        if (identifiedSubject) {
            // We want to wrap this block with Unit identification?
            // Actually, keep the block as is, but maybe inject "Unit X" in the header?
            // The user wants "Unit-Wise Organization within Subjects".
            // Let's inject a small badge or label in the subject-header if possible, or wrap.

            // Simplest: Add a small unit label before the subject keywords in the header logic?
            // Or just store it.

            // Let's modify the block to force it open or mark it.
            // Actually, let's keep it simple. Just add the block.
            // We'll wrap it in a wrapper that says "Unit X"

            const wrappedBlock = `
            <div class="unit-wrapper" style="margin-bottom: 30px;">
                <h3 style="color: #666; border-bottom: 2px solid #eee; padding-bottom: 10px; margin-bottom: 15px;">Unit ${u}</h3>
                ${block}
            </div>`;

            subjects[identifiedSubject].notes.push(wrappedBlock);
        }
    }

    // 2. Extract MCQs
    // Strategy: Find <div class="mcq-container" id="KEY-mcq">
    for (const [key, data] of Object.entries(subjects)) {
        const idMarker = `id="${key}-mcq"`;
        const idPos = html.indexOf(idMarker);
        if (idPos !== -1) {
            // Find the opening <div before this ID
            const divStart = html.lastIndexOf('<div', idPos);
            const divEnd = findClosingDiv(html, divStart + 4);

            if (divStart !== -1 && divEnd !== -1) {
                // We have the container.
                // We want the inner questions.
                // The container usually has id="..-mcq" and class="mcq-container".
                // Inner content has .mcq-question divs.

                // Let's extract the INNER content of this container.
                const contentStart = html.indexOf('>', divStart) + 1;
                const innerContent = html.substring(contentStart, divEnd - 6);

                if (innerContent.trim()) {
                    subjects[key].mcqs.push(`<!-- Unit ${u} MCQs -->\n` + innerContent);
                }
            }
        }
    }
});


// Load Template (Unit 1)
const templateHtml = fs.readFileSync('unit1.html', 'utf8');

// Generate Files
for (const [key, data] of Object.entries(subjects)) {
    let newHtml = templateHtml;

    // A. Clean up Head/Title
    newHtml = newHtml.replace(/<title>.*?<\/title>/, `<title>${data.title} - Complete Notes</title>`);

    // B. Clean up Hero
    // Replace H2 and P in Hero
    newHtml = newHtml.replace(/<section class="hero">[\s\S]*?<\/section>/,
        `<section class="hero">
            <h2>${data.title}</h2>
            <p>Complete Subject Notes (Units 1-5) & Exam Focused MCQs</p>
            <div class="cta-buttons">
                <a href="#notes" class="btn btn-primary"><i class="fas fa-book"></i> Start Studying</a>
                <a href="#mcq" class="btn btn-secondary"><i class="fas fa-question-circle"></i> Practice MCQs</a>
                <a href="index.html" class="btn btn-tertiary"><i class="fas fa-arrow-left"></i> Back to Home</a>
            </div>
        </section>`);

    // C. Replace Navigation
    // Keep it simple
    const newNav = `
    <ul>
        <li><a href="index.html"><i class="fas fa-home"></i> Home</a></li>
        <li><a href="graphics.html" ${key === 'graphics' ? 'class="active-link"' : ''}>Graphics</a></li>
        <li><a href="dbms.html" ${key === 'dbms' ? 'class="active-link"' : ''}>DBMS</a></li>
        <li><a href="se.html" ${key === 'se' ? 'class="active-link"' : ''}>SE</a></li>
        <li><a href="optimization.html" ${key === 'optimization' ? 'class="active-link"' : ''}>Optimization</a></li>
        <li><a href="math.html" ${key === 'math' ? 'class="active-link"' : ''}>Math</a></li>
    </ul>`;
    newHtml = newHtml.replace(/<nav>[\s\S]*?<\/nav>/, `<nav>${newNav}</nav>`);


    // D. Replace Notes Section
    // We want to replace everything from id="notes" down to the start of MCQ section
    // Find <h2 ... id="notes">
    const notesheaderRegex = /<h2\s+class="section-title"\s+id="notes">.*?<\/h2>/;
    const notesMatch = notesheaderRegex.exec(newHtml);

    // Find <h2 ... id="mcq"> or start of MCQs
    // Actually, let's just create the replacement block

    // Combine all notes
    const allNotesHtml = data.notes.join('\n');

    // We need to inject this AFTER the notes header, and REMOVE the old subject containers.
    // The old file has: Header -> [Container, Container...] -> Header(MCQ)

    // Locate the zone
    const startMarker = '<h2 class="section-title" id="notes">';
    const endMarker = '<!-- MCQ Practice Section -->'; // Check unit1 for this marker? Or just 'id="mcq"'

    const startIdx = newHtml.indexOf('id="notes"');
    // Find the H2 closing tag
    const h2End = newHtml.indexOf('</h2>', startIdx) + 5;

    // Find start of MCQ section
    const mcqIdx = newHtml.indexOf('id="mcq"');
    // We need to cut from h2End to the stored MCQ header in the original file.
    // In unit1.html, the structure is:
    // ... id="notes" ...
    // ... content ...
    // <!-- MCQ Practice Section -->
    // <h2 class="section-title" id="mcq"> ...

    const cutStart = h2End;
    const cutEnd = newHtml.lastIndexOf('<h2', mcqIdx); // define boundary at start of MCQ Header tag

    const finalNotesSection = `
    <!-- Combined Subject Notes -->
    <div class="subject-notes-wrapper" style="margin-top: 20px;">
        ${allNotesHtml}
    </div>
    `;

    newHtml = newHtml.substring(0, cutStart) + finalNotesSection + newHtml.substring(cutEnd);


    // E. Replace MCQ Section
    // Combine all MCQs
    const allMcqsHtml = data.mcqs.join('\n');

    const mcqBlock = `
    <div class="mcq-section">
        <div class="score-display">
            <p>Your Score: <span id="score">0</span> out of <span id="total-questions">0</span></p>
            <button id="reset-btn" class="btn btn-secondary" style="padding: 5px 15px; font-size: 0.9rem;">Reset</button>
        </div>
        
        <div class="mcq-container active" id="${key}-combined-mcq">
            ${allMcqsHtml}
        </div>
        
        <div class="mcq-navigation">
            <button id="prev-btn" class="btn btn-secondary"><i class="fas fa-arrow-left"></i> Previous</button>
            <button id="next-btn" class="btn btn-primary">Next <i class="fas fa-arrow-right"></i></button>
        </div>
    </div>
    `;

    // We need to replace the old MCQ section (Tabs + Containers)
    // From id="mcq" header END ... to ... PYQ Section Start or Footer
    // Find MCQ Header end
    const mcqHeaderStart = newHtml.indexOf('id="mcq"');
    const mcqHeaderEnd = newHtml.indexOf('</h2>', mcqHeaderStart) + 5;

    // Find PYQ or Footer
    const pyqIdx = newHtml.indexOf('id="pyq"');
    let contentEnd = pyqIdx;
    if (contentEnd === -1) {
        // if no pyq, look for footer
        contentEnd = newHtml.indexOf('<footer>');
    }
    // We need to capture the container before the next section
    // Actually, let's just look for the next <h2 if pyq exists, or footer.

    // In unit1.html there is a PYQ section.
    // Cut from mcqHeaderEnd to pyqIdx (start of <h2 id="pyq">)
    const cutEnd2 = newHtml.lastIndexOf('<h2', pyqIdx);

    if (mcqHeaderStart !== -1 && cutEnd2 !== -1) {
        newHtml = newHtml.substring(0, mcqHeaderEnd) + mcqBlock + newHtml.substring(cutEnd2);
    }

    // F. Replace Script
    // We need the CLEAN script I verified earlier.
    const cleanScript = `
    <script>
        // Collapsible sections
        document.querySelectorAll('.subject-header').forEach(header => {
            header.addEventListener('click', () => {
                const content = header.nextElementSibling;
                header.classList.toggle('active');
                content.classList.toggle('active');
            });
        });

        // MCQ Logic
        let score = 0;
        let currentQuestion = 0;
        let questions = [];

        function initializeQuestions() {
            questions = [];
            const container = document.querySelector('.mcq-container.active');
            if(!container) return;

            const qEls = container.querySelectorAll('.mcq-question');
            
            qEls.forEach(q => {
                // Reset visual state
                q.querySelectorAll('.mcq-option').forEach(o => {
                    o.classList.remove('selected', 'correct', 'incorrect');
                    o.style.pointerEvents = 'auto';
                });
                const exp = q.querySelector('.mcq-explanation');
                if(exp) exp.classList.remove('show');
                
                // Ensure submit button
                let btn = q.querySelector('.submit-answer-btn');
                if(!btn) {
                    btn = document.createElement('button');
                    btn.className = 'submit-answer-btn';
                    btn.textContent = 'Submit Answer';
                    btn.style.marginTop = '10px';
                    if(exp) q.insertBefore(btn, exp);
                    else q.appendChild(btn);
                }
                btn.disabled = false;
                btn.textContent = 'Submit Answer';

                questions.push({ element: q, answered: false });
            });

            document.getElementById('total-questions').textContent = questions.length;
            updateScore(0);
            showQuestion();
        }

        function updateScore(s) {
            score = s;
            document.getElementById('score').textContent = score;
        }

        function showQuestion() {
            questions.forEach(q => q.element.style.display = 'none');
            if(questions[currentQuestion]) {
                questions[currentQuestion].element.style.display = 'block';
            }
            
            const prev = document.getElementById('prev-btn');
            const next = document.getElementById('next-btn');
            
            if(prev) prev.disabled = currentQuestion === 0;
            if(next) next.innerHTML = currentQuestion === questions.length - 1 ? 'Finish' : 'Next <i class="fas fa-arrow-right"></i>';
        }

        // Event Delegation
        document.addEventListener('click', (e) => {
            if(e.target.classList.contains('mcq-option')) {
                const qDiv = e.target.closest('.mcq-question');
                const btn = qDiv.querySelector('.submit-answer-btn');
                if(btn && btn.disabled) return;
                
                qDiv.querySelectorAll('.mcq-option').forEach(o => o.classList.remove('selected'));
                e.target.classList.add('selected');
            }

            if(e.target.classList.contains('submit-answer-btn')) {
                const btn = e.target;
                const qDiv = btn.closest('.mcq-question');
                const selected = qDiv.querySelector('.mcq-option.selected');
                
                if(!selected) { alert('Select an option!'); return; }
                
                const qIdx = questions.findIndex(q => q.element === qDiv);
                if(qIdx === -1) return;

                const isCorrect = selected.dataset.correct === 'true';
                if(isCorrect) updateScore(score + 1);

                qDiv.querySelectorAll('.mcq-option').forEach(o => {
                    o.style.pointerEvents = 'none';
                    if(o.dataset.correct === 'true') o.classList.add('correct');
                    else if(o.classList.contains('selected')) o.classList.add('incorrect');
                    o.classList.remove('selected');
                });

                const exp = qDiv.querySelector('.mcq-explanation');
                if(exp) exp.classList.add('show');

                btn.disabled = true;
                btn.textContent = isCorrect ? 'Correct' : 'Incorrect';
            }
        });

        document.getElementById('next-btn')?.addEventListener('click', () => {
            if(currentQuestion < questions.length -1) {
                currentQuestion++;
                showQuestion();
            } else {
                alert('Quiz Finished! Score: ' + score + '/' + questions.length);
            }
        });

        document.getElementById('prev-btn')?.addEventListener('click', () => {
            if(currentQuestion > 0) {
                currentQuestion--;
                showQuestion();
            }
        });
        
        document.getElementById('reset-btn')?.addEventListener('click', () => {
             initializeQuestions();
        });

        // Init
        window.addEventListener('DOMContentLoaded', () => {
            initializeQuestions();
            // Auto open first unit?
            const firstHeader = document.querySelector('.subject-header');
            if(firstHeader) firstHeader.click();
        });
    </script>
    `;

    // Replace Script
    const scriptStart = newHtml.indexOf('<script>');
    if (scriptStart !== -1) {
        newHtml = newHtml.substring(0, scriptStart) + cleanScript + "</body></html>";
    }

    // Write File
    const fileName = `${key}.html`;
    console.log(`Writing ${fileName} (${newHtml.length} bytes)...`);
    fs.writeFileSync(fileName, newHtml);
}
