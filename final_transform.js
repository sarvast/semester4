const fs = require('fs');

// 1. Data Definitions
const units = [1, 2, 3, 4, 5];
const subjects = {
    'graphics': {
        keywords: ['Computer Graphics', 'Graphics & Animation'],
        title: 'Computer Graphics & Animation',
        icon: 'fa-desktop',
        notes: [],
        mcqs: {} // Object: { 1: content, 2: content ... }
    },
    'dbms': {
        keywords: ['Database Management', 'DBMS'],
        title: 'Database Management System (DBMS)',
        icon: 'fa-database',
        notes: [],
        mcqs: {}
    },
    'se': {
        keywords: ['Software Engineering'],
        title: 'Software Engineering',
        icon: 'fa-code',
        notes: [],
        mcqs: {}
    },
    'optimization': {
        keywords: ['Optimization'],
        title: 'Optimization Techniques',
        icon: 'fa-chart-line',
        notes: [],
        mcqs: {}
    },
    'math': {
        keywords: ['Mathematics', 'Math-III'],
        title: 'Mathematics-III',
        icon: 'fa-calculator',
        notes: [],
        mcqs: {}
    }
};

// 2. Helpers
function findClosingDiv(html, startIndex) {
    let depth = 1;
    let currentIdx = startIndex;
    while (depth > 0 && currentIdx < html.length) {
        const nextDivStart = html.indexOf('<div', currentIdx);
        const nextDivEnd = html.indexOf('</div>', currentIdx);
        if (nextDivEnd === -1) return -1;
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

// 3. Extract Content
function extractContent() {
    units.forEach(u => {
        let html;
        try { html = fs.readFileSync(`unit${u}.html`, 'utf8'); } catch (e) { return; }

        console.log(`Extracting from Unit ${u}...`);

        // A. Extract Notes
        let searchIdx = 0;
        while (true) {
            const marker = '<div class="subject-container">';
            const start = html.indexOf(marker, searchIdx);
            if (start === -1) break;

            const end = findClosingDiv(html, start + marker.length);
            if (end === -1) { searchIdx = start + 1; continue; }

            const block = html.substring(start, end);
            searchIdx = end;

            const headerMatch = block.match(/<h3>(.*?)<\/h3>/);
            const headerText = headerMatch ? headerMatch[1].toLowerCase() : "";

            let identifiedSubject = null;
            for (const [key, data] of Object.entries(subjects)) {
                for (const kw of data.keywords) {
                    if (headerText.includes(kw.toLowerCase())) {
                        identifiedSubject = key;
                        break;
                    }
                }
                if (identifiedSubject) break;
            }

            if (identifiedSubject) {
                // Ensure the block is open or closed? 
                // We'll trust the script to handle toggling. 
                // But we add a Unit header.
                const decoratedBlock = `
                <div class="unit-block" style="margin-bottom: 30px;">
                    <div style="background: #f1f2f6; padding: 8px 15px; border-radius: 5px 5px 0 0; border-left: 4px solid #2c3e50;">
                        <h4 style="margin:0; color:#2c3e50;">Unit ${u}</h4>
                    </div>
                    ${block}
                </div>`;
                subjects[identifiedSubject].notes.push(decoratedBlock);
            }
        }

        // B. Extract MCQs
        for (const [key, data] of Object.entries(subjects)) {
            const idMarker = `id="${key}-mcq"`;
            const idPos = html.indexOf(idMarker);
            if (idPos !== -1) {
                const divStart = html.lastIndexOf('<div', idPos);
                const divEnd = findClosingDiv(html, divStart + 4);
                if (divStart !== -1 && divEnd !== -1) {
                    const block = html.substring(divStart, divEnd);
                    const firstGreaterThan = block.indexOf('>');
                    const innerHTML = block.substring(firstGreaterThan + 1, block.length - 6);

                    if (innerHTML.trim().length > 0) {
                        if (!subjects[key].mcqs[u]) subjects[key].mcqs[u] = "";
                        subjects[key].mcqs[u] += innerHTML;
                    }
                }
            }
        }
    });
}

// 4. Generate Pages
function generatePages() {
    // We use a fresh HTML structure instead of replacing in template to avoid errors
    // Copy style from unit1
    const unit1 = fs.readFileSync('unit1.html', 'utf8');
    const styleStart = unit1.indexOf('<style>');
    const styleEnd = unit1.indexOf('</style>') + 8;
    const styleBlock = unit1.substring(styleStart, styleEnd);

    Object.keys(subjects).forEach(key => {
        const sub = subjects[key];
        const notesContent = sub.notes.join('\n') || "<p>Notes not available.</p>";

        // Build MCQ Sections (Tabs + Content)
        let mcqNav = `<div class="mcq-tabs" style="display:flex; gap:10px; margin-bottom:20px; flex-wrap:wrap;">
            <button class="mcq-tab-btn active btn btn-secondary" onclick="switchTab('all')">All Units</button>`;

        let mcqContainers = "";
        let allMcqContent = "";

        Object.keys(sub.mcqs).sort().forEach(u => {
            mcqNav += `<button class="mcq-tab-btn btn btn-secondary" onclick="switchTab('${u}')" style="background:#fff; color:#333; border:1px solid #ddd;">Unit ${u}</button>`;

            mcqContainers += `
            <div class="mcq-container" id="container-unit-${u}" style="display:none;">
                <div style="background:#e8f5e9; padding:10px; margin-bottom:15px; border-radius:5px;">
                    <strong>Unit ${u} Questions</strong>
                </div>
                ${sub.mcqs[u]}
            </div>`;

            allMcqContent += `
            <div class="unit-separator" style="margin: 20px 0 10px 0; border-bottom:2px dashed #ccc; padding-bottom:5px;">
                <span style="background:#eee; padding:5px 10px; border-radius:5px; font-weight:bold;">Unit ${u}</span>
            </div>
            ${sub.mcqs[u]}`;
        });

        mcqNav += `</div>`;

        mcqContainers += `
        <div class="mcq-container active" id="container-all">
            ${allMcqContent}
        </div>`;


        const pageHtml = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${sub.title} - Complete Notes</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <!-- MathJax -->
    <script>
        MathJax = { tex: { inlineMath: [['$', '$'], ['\\\\(', '\\\\)']] } };
    </script>
    <script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-chtml.js"></script>
    ${styleBlock}
    <style>
        .mcq-tab-btn.active {
            background-color: var(--secondary-color) !important;
            color: white !important;
            border-color: var(--secondary-color) !important;
        }
        .mcq-tab-btn {
            transition: all 0.3s;
        }
    </style>
</head>
<body>

    <header>
        <div class="container header-content">
            <div class="logo">
                <i class="fas fa-graduation-cap"></i>
                <div>
                    <h1>Sarvasva Notes</h1>
                    <p>${sub.title}</p>
                </div>
            </div>
            <nav>
                <ul>
                    <li><a href="index.html"><i class="fas fa-home"></i> Home</a></li>
                    <li><a href="graphics.html" class="${key === 'graphics' ? 'active-nav' : ''}">Graphics</a></li>
                    <li><a href="dbms.html" class="${key === 'dbms' ? 'active-nav' : ''}">DBMS</a></li>
                    <li><a href="se.html" class="${key === 'se' ? 'active-nav' : ''}">SE</a></li>
                    <li><a href="optimization.html" class="${key === 'optimization' ? 'active-nav' : ''}">Optimization</a></li>
                    <li><a href="math.html" class="${key === 'math' ? 'active-nav' : ''}">Math</a></li>
                </ul>
            </nav>
        </div>
    </header>

    <div class="container">
        <!-- Hero -->
        <section class="hero">
            <h2>${sub.title}</h2>
            <p>Complete Subject Notes & MCQs (organized by Unit)</p>
            <div class="cta-buttons">
                <a href="#notes" class="btn btn-primary">Read Notes</a>
                <a href="#mcq" class="btn btn-secondary">Practice MCQs</a>
            </div>
        </section>

        <!-- Notes -->
        <h2 class="section-title" id="notes"><i class="fas fa-book-open"></i> Subject Notes</h2>
        <div class="notes-wrapper">
            ${notesContent}
        </div>

        <!-- MCQs -->
        <h2 class="section-title" id="mcq"><i class="fas fa-question-circle"></i> MCQ Practice</h2>
        <div class="mcq-section">
            <div class="score-display">
                Score: <span id="score">0</span> / <span id="total-questions">0</span>
                <button id="reset-btn" class="btn btn-secondary" style="font-size:0.8rem; padding:4px 10px; margin-left:10px;">Reset</button>
            </div>
            
            ${mcqNav}
            ${mcqContainers}
            
            <div class="mcq-navigation">
                <button id="prev-btn" class="btn btn-secondary">Previous</button>
                <button id="next-btn" class="btn btn-primary">Next</button>
            </div>
        </div>

    </div>

    <footer>
        <div class="container" style="text-align:center;">
            <p>© 2026 Sarvasva Notes</p>
        </div>
    </footer>

    <script>
        // --- Subject Header Toggle ---
        document.querySelectorAll('.subject-header').forEach(header => {
            header.addEventListener('click', () => {
                const content = header.nextElementSibling;
                header.classList.toggle('active');
                content.classList.toggle('active');
            });
        });

        // --- MCQ System ---
        let score = 0;
        let currentQuestion = 0;
        let questions = [];

        function switchTab(unit) {
            // Update Tabs
            document.querySelectorAll('.mcq-tab-btn').forEach(btn => {
                btn.classList.remove('active');
                btn.style.background = '#fff';
                btn.style.color = '#333';
            });
            const clickedBtn = event.target;
            clickedBtn.classList.add('active');
            clickedBtn.style.background = ''; // revert to CSS class style
            clickedBtn.style.color = '';

            // Update Containers
            document.querySelectorAll('.mcq-container').forEach(c => {
                c.classList.remove('active');
                c.style.display = 'none';
            });
            const target = document.getElementById(unit === 'all' ? 'container-all' : 'container-unit-' + unit);
            if(target) {
                target.classList.add('active');
                target.style.display = 'block';
            }
            
            // Re-init
            initializeQuestions();
        }

        function initializeQuestions() {
            questions = [];
            const container = document.querySelector('.mcq-container.active');
            if(!container) return; // Should not happen

            const qElements = container.querySelectorAll('.mcq-question');
            
            qElements.forEach(q => {
                // Reset styling
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
            if(next) {
                if(questions.length === 0) next.style.display = 'none';
                else {
                    next.style.display = 'inline-block';
                    next.innerHTML = currentQuestion === questions.length - 1 ? 'Finish' : 'Next <i class="fas fa-arrow-right"></i>';
                }
            }
        }

        // --- Event Delegation for MCQ Interactions ---
        document.addEventListener('click', (e) => {
            // Option Select
            if(e.target.classList.contains('mcq-option')) {
                const qDiv = e.target.closest('.mcq-question');
                const btn = qDiv.querySelector('.submit-answer-btn');
                if(btn && btn.disabled) return;
                
                qDiv.querySelectorAll('.mcq-option').forEach(o => o.classList.remove('selected'));
                e.target.classList.add('selected');
            }

            // Submit
            if(e.target.classList.contains('submit-answer-btn')) {
                const btn = e.target;
                const qDiv = btn.closest('.mcq-question');
                const selected = qDiv.querySelector('.mcq-option.selected');
                
                if(!selected) { alert('Please select an option'); return; }

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
                btn.textContent = isCorrect ? 'Correct!' : 'Incorrect';
            }
        });

        // Navigation
        document.getElementById('next-btn')?.addEventListener('click', () => {
            if(currentQuestion < questions.length - 1) {
                currentQuestion++;
                showQuestion();
            } else {
                 if(questions.length > 0) alert('Section Complete! Score: ' + score);
            }
        });

        document.getElementById('prev-btn')?.addEventListener('click', () => {
            if(currentQuestion > 0) {
                currentQuestion--;
                showQuestion();
            }
        });

        document.getElementById('reset-btn')?.addEventListener('click', () => initializeQuestions());

        // Init
        window.addEventListener('DOMContentLoaded', () => {
            initializeQuestions();
            // Open first note
            const h = document.querySelector('.subject-header');
            if(h) h.click();
        });
        
        // Smooth Scroll
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if(target) window.scrollTo({ top: target.offsetTop - 80, behavior: 'smooth' });
            });
        });
    </script>
</body>
</html>`;

        fs.writeFileSync(`${key}.html`, pageHtml);
        console.log(`Generated ${key}.html`);
    });
}

extractContent();
generatePages();
