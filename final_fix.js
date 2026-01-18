const fs = require('fs');

// 1. Data Definitions
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

// 3. Extract Function
function extractContent() {
    units.forEach(u => {
        let html;
        try { html = fs.readFileSync(`unit${u}.html`, 'utf8'); } catch (e) { return; }

        console.log(`Extracting from Unit ${u}...`);

        // A. Extract Notes Containers
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
            let identifiedSubject = null;
            // Get Header Text to be sure
            const headerMatch = block.match(/<h3>(.*?)<\/h3>/);
            const headerText = headerMatch ? headerMatch[1].toLowerCase() : "";

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
                // Add Unit Label
                const decoratedBlock = `
                <div class="unit-block" style="margin-bottom: 40px; border: 1px solid #e0e0e0; border-radius: 8px; overflow: hidden;">
                    <div style="background: #f8f9fa; padding: 10px 20px; border-bottom: 1px solid #ddd;">
                        <h3 style="margin:0; color: #555; font-size: 1.1rem;">Unit ${u} Content</h3>
                    </div>
                    <div style="padding: 10px;">
                        ${block}
                    </div>
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
                    // Extract inner content (questions)
                    // We look for class="mcq-question"
                    const block = html.substring(divStart, divEnd);
                    // Naive extraction of innerHTML might capture extra divs.
                    // Let's just Regex matches for <div class="mcq-question">...</div> 
                    // But questions might be nested or formatting complex.
                    // simpler: Just take the whole container's innerHTML
                    const firstGreaterThan = block.indexOf('>');
                    const innerHTML = block.substring(firstGreaterThan + 1, block.length - 6);

                    if (innerHTML.trim().length > 0) {
                        subjects[key].mcqs.push(`<!-- Unit ${u} MCQs --> <div class="unit-mcq-label" style="background:#eee; padding:5px; margin:10px 0; font-weight:bold;">Unit ${u} Questions</div>` + innerHTML);
                    }
                }
            }
        }
    });
}

// 4. Generate Pages
function generatePages() {
    Object.keys(subjects).forEach(key => {
        const sub = subjects[key];
        const notesContent = sub.notes.join('\n') || "<div class='card'><p>No notes found for this subject.</p></div>";
        const mcqsContent = sub.mcqs.join('\n') || "<div class='card'><p>No MCQs found for this subject.</p></div>";

        const pageHtml = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${sub.title} - Sarvasva Notes</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <link rel="stylesheet" href="style.css">
    <!-- MathJax -->
    <script>
        MathJax = { tex: { inlineMath: [['$', '$'], ['\\\\(', '\\\\)']] } };
    </script>
    <script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-chtml.js"></script>
    <style>
        /* Specific overrides for Subject Pages */
        .subject-notes-wrapper { display: flex; flex-direction: column; gap: 1.5rem; }
    </style>
</head>
<body>

    <header>
        <div class="container header-content">
            <div class="logo">
                <i class="fas fa-graduation-cap"></i>
                <div>
                   <span style="display:block; line-height:1;">Sarvasva Notes</span>
                   <span style="font-size: 0.8rem; opacity: 0.8; font-weight: 400;">${sub.title}</span>
                </div>
            </div>
            <nav>
                <ul>
                    <li><a href="index.html"><i class="fas fa-home"></i> Home</a></li>
                    <li><a href="graphics.html" class="${key === 'graphics' ? 'active' : ''}">Graphics</a></li>
                    <li><a href="dbms.html" class="${key === 'dbms' ? 'active' : ''}">DBMS</a></li>
                    <li><a href="se.html" class="${key === 'se' ? 'active' : ''}">SE</a></li>
                    <li><a href="optimization.html" class="${key === 'optimization' ? 'active' : ''}">Optimization</a></li>
                    <li><a href="math.html" class="${key === 'math' ? 'active' : ''}">Math</a></li>
                </ul>
            </nav>
        </div>
    </header>

    <div class="container">
        <!-- Hero -->
        <section class="hero" style="padding: 3rem 1rem; margin-bottom: 2rem;">
            <h2><i class="fas ${sub.icon}"></i> ${sub.title}</h2>
            <p>Comprehensive compilation of notes and MCQs from all 5 Units.</p>
            <div style="display:flex; justify-content:center; gap:1rem;">
                <a href="#notes" class="btn btn-primary"><i class="fas fa-book"></i> Notes</a>
                <a href="#mcq" class="btn btn-secondary"><i class="fas fa-question-circle"></i> MCQs</a>
            </div>
        </section>

        <!-- Notes Section -->
        <h2 class="section-title" id="notes"><i class="fas fa-book-open"></i> Complete Notes (Unit 1-5)</h2>
        <div class="subject-notes-wrapper">
            ${notesContent}
        </div>

        <!-- MCQ Section -->
        <h2 class="section-title" id="mcq" style="margin-top: 4rem;"><i class="fas fa-question-circle"></i> MCQ Practice</h2>
        <div class="mcq-section">
            <div class="score-display">
                <p>Score: <span id="score">0</span> / <span id="total-questions">0</span></p>
                <button id="reset-btn" class="btn btn-secondary" style="font-size:0.8rem; padding: 5px 15px; color: var(--primary); background: white; border: 1px solid var(--primary); margin-top: 10px;">Reset Quiz</button>
            </div>
            
            <div class="mcq-container active">
                ${mcqsContent}
            </div>
            
            <div class="mcq-navigation" style="display:flex; justify-content:space-between; margin-top:2rem;">
                <button id="prev-btn" class="btn btn-secondary" style="background: #e2e8f0; color: var(--text-main);">Previous</button>
                <button id="next-btn" class="btn btn-primary">Next</button>
            </div>
        </div>

    </div>

    <footer>
        <p>© 2026 Sarvasva Notes. All Rights Reserved.</p>
    </footer>

    <script>
        // Collapsible Logic
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
                // Reset UI
                q.querySelectorAll('.mcq-option').forEach(o => {
                    o.classList.remove('selected', 'correct', 'incorrect');
                    o.style.pointerEvents = 'auto';
                });
                const exp = q.querySelector('.mcq-explanation');
                if(exp) exp.classList.remove('show');

                // Inject Button if missing
                let btn = q.querySelector('.submit-answer-btn');
                if(!btn) {
                    btn = document.createElement('button');
                    btn.className = 'submit-answer-btn';
                    btn.textContent = 'Submit Answer';
                    btn.classList.add('btn', 'btn-primary'); // Add new classes
                    btn.style.marginTop = '15px';
                    // q.appendChild(btn); // Append at end
                     if(exp) q.insertBefore(btn, exp);
                     else q.appendChild(btn);
                }
                btn.disabled = false;
                btn.textContent = 'Submit Answer';

                questions.push({ element: q, answered: false });
            });

            const totalQ = document.getElementById('total-questions');
            if(totalQ) totalQ.textContent = questions.length;
            updateScore(0);
            showQuestion();
        }

        function updateScore(s) {
            score = s;
            const scoreEl = document.getElementById('score');
            if(scoreEl) scoreEl.textContent = score;
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
                
                if(!selected) { alert('Please select an option.'); return; }

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

        document.getElementById('next-btn')?.addEventListener('click', () => {
            if(currentQuestion < questions.length - 1) {
                currentQuestion++;
                showQuestion();
            } else {
                alert('Quiz Complete! Score: ' + score);
            }
        });

        document.getElementById('prev-btn')?.addEventListener('click', () => {
            if(currentQuestion > 0) {
                currentQuestion--;
                showQuestion();
            }
        });

        document.getElementById('reset-btn')?.addEventListener('click', () => initializeQuestions());

        window.addEventListener('DOMContentLoaded', () => {
            initializeQuestions();
            // Open first note block
            const firstHeader = document.querySelector('.subject-header');
            if(firstHeader) firstHeader.click();
        });

        // Smooth scroll
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                if (targetId === '#') return;
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            });
        });
    </script>
</body>
</html>`;

        fs.writeFileSync(`${key}.html`, pageHtml);
        console.log(`Generated ${key}.html with ${sub.notes.length} note blocks and ${sub.mcqs.length} MCQ blocks.`);
    });
}

// Execution
extractContent();
generatePages();
