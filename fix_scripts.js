const fs = require('fs');

const files = ['graphics.html', 'dbms.html', 'se.html', 'optimization.html', 'math.html'];

const cleanScript = `
    <script>
        // Collapsible subject sections
        document.querySelectorAll('.subject-header').forEach(header => {
            header.addEventListener('click', () => {
                const content = header.nextElementSibling;
                header.classList.toggle('active');
                content.classList.toggle('active');
            });
        });

        // MCQ functionality
        let score = 0;
        let totalQuestions = 0;
        let currentQuestion = 0;
        let questions = [];

        // Initialize questions array
        function initializeQuestions() {
            questions = [];
            const activeContainer = document.querySelector('.mcq-container.active');
            if (!activeContainer) {
                console.error("No active MCQ container found!");
                return;
            }

            const questionElements = activeContainer.querySelectorAll('.mcq-question');

            questionElements.forEach((q) => {
                // Reset Options
                const options = q.querySelectorAll('.mcq-option');
                options.forEach(opt => {
                    opt.classList.remove('selected', 'correct', 'incorrect');
                    opt.style.pointerEvents = 'auto';
                });

                // Reset Explanation
                const explanation = q.querySelector('.mcq-explanation');
                if (explanation) explanation.classList.remove('show');

                // Add or Reset Submit Button
                let submitBtn = q.querySelector('.submit-answer-btn');
                if (!submitBtn) {
                    submitBtn = document.createElement('button');
                    submitBtn.className = 'submit-answer-btn';
                    submitBtn.textContent = 'Submit Answer';
                    if (explanation) {
                        q.insertBefore(submitBtn, explanation);
                    } else {
                        q.appendChild(submitBtn);
                    }
                }
                submitBtn.disabled = false;
                submitBtn.textContent = 'Submit Answer';
                
                questions.push({
                    element: q,
                    answered: false,
                    correct: false
                });
            });

            const totalSpan = document.getElementById('total-questions');
            if(totalSpan) totalSpan.textContent = questions.length;
            
            score = 0;
            const scoreSpan = document.getElementById('score');
            if(scoreSpan) scoreSpan.textContent = score;

            showQuestion();
        }

        // Show current question
        function showQuestion() {
            // Hide all questions
            questions.forEach((q) => {
                q.element.style.display = 'none';
            });

            // Show current question
            if (questions[currentQuestion]) {
                questions[currentQuestion].element.style.display = 'block';
            }

            // Update navigation buttons
            const nextBtn = document.getElementById('next-btn');
            const prevBtn = document.getElementById('prev-btn');

            if (prevBtn) prevBtn.disabled = currentQuestion === 0;
            if (nextBtn) {
                nextBtn.innerHTML = currentQuestion === questions.length - 1 ? 'Finish' : 'Next <i class="fas fa-arrow-right"></i>';
            }
        }

        // Handle MCQ Interactions (Selection & Submission)
        document.addEventListener('click', (e) => {
            // 1. Handle Option Selection
            if (e.target.classList.contains('mcq-option')) {
                const questionDiv = e.target.closest('.mcq-question');
                const submitBtn = questionDiv.querySelector('.submit-answer-btn');

                // If already submitted, do nothing
                if (submitBtn && submitBtn.disabled) return;

                // Deselect other options in this question
                const options = questionDiv.querySelectorAll('.mcq-option');
                options.forEach(opt => opt.classList.remove('selected'));

                // Select clicked option
                e.target.classList.add('selected');
            }

            // 2. Handle Submit Button Click
            if (e.target.classList.contains('submit-answer-btn')) {
                const button = e.target;
                const questionDiv = button.closest('.mcq-question');
                const selectedOption = questionDiv.querySelector('.mcq-option.selected');

                if (!selectedOption) {
                    alert('Please select an option first!');
                    return;
                }

                const options = questionDiv.querySelectorAll('.mcq-option');
                const explanation = questionDiv.querySelector('.mcq-explanation');

                // Find question data
                const questionIndex = questions.findIndex(q => q.element === questionDiv);
                if (questionIndex !== -1) {
                    questions[questionIndex].answered = true;

                    const isCorrect = selectedOption.getAttribute('data-correct') === 'true';
                    questions[questionIndex].correct = isCorrect;

                    if (isCorrect) {
                        score++;
                        const scoreSpan = document.getElementById('score');
                        if(scoreSpan) scoreSpan.textContent = score;
                    }

                    // Show Results
                    options.forEach(option => {
                        option.style.pointerEvents = 'none'; // Lock

                        // Always highlight the correct answer Green
                        if (option.getAttribute('data-correct') === 'true') {
                            option.classList.add('correct');
                        }
                        // If selected was wrong, highlight Red
                        else if (option.classList.contains('selected')) {
                            option.classList.add('incorrect');
                        }

                        // Remove blue selection style to avoid confusion
                        option.classList.remove('selected');
                    });

                    // Show Explanation
                    if (explanation) explanation.classList.add('show');

                    // Update Button State
                    button.disabled = true;
                    button.textContent = isCorrect ? 'Correct!' : 'Incorrect';
                }
            }
        });

        // Navigation buttons
        const nextBtn = document.getElementById('next-btn');
        if(nextBtn) {
            nextBtn.addEventListener('click', () => {
                if (currentQuestion < questions.length - 1) {
                    currentQuestion++;
                    showQuestion();
                } else {
                    alert(\`Quiz completed! Your score: \${score}/\${questions.length}\`);
                }
            });
        }

        const prevBtn = document.getElementById('prev-btn');
        if(prevBtn) {
            prevBtn.addEventListener('click', () => {
                if (currentQuestion > 0) {
                    currentQuestion--;
                    showQuestion();
                }
            });
        }

        // Reset quiz
        const resetBtn = document.getElementById('reset-btn');
        if(resetBtn) {
            resetBtn.addEventListener('click', () => {
                score = 0;
                currentQuestion = 0;
                const scoreSpan = document.getElementById('score');
                if(scoreSpan) scoreSpan.textContent = score;

                // Reset all questions
                document.querySelectorAll('.mcq-option').forEach(option => {
                    option.classList.remove('correct', 'incorrect', 'selected');
                    option.style.pointerEvents = 'auto';
                });

                document.querySelectorAll('.mcq-explanation').forEach(exp => {
                    exp.classList.remove('show');
                });

                initializeQuestions();
            });
        }

        // Smooth scrolling for anchor links
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

        // Initialize on page load
        window.addEventListener('DOMContentLoaded', () => {
            initializeQuestions();

            // Open first subject by default if exists
            const firstHeader = document.querySelector('.subject-header');
            if(firstHeader) firstHeader.click();
        });
    </script>
</body>
</html>`;

files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');

    // Remove existing script loop
    const scriptStart = content.indexOf('<script>');
    if (scriptStart !== -1) {
        console.log(`Replacing script in ${file}`);
        // Keep content up to script start
        const newContent = content.substring(0, scriptStart) + cleanScript.trim();
        // Just writing the new content which ends with </html>
        // We assume the original file ended with clean script then </body></html> or similar.
        // Actually, let's be safer.
        // The original file ends with </body></html>.
        // My cleanScript includes closing body/html.
        // The substring(0, scriptStart) removes the old script and the old closing tags.
        fs.writeFileSync(file, newContent);
    } else {
        console.log(`Script tag not found in ${file}`);
    }
});
