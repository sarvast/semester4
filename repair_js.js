const fs = require('fs');

const files = ['graphics.html', 'dbms.html', 'se.html', 'optimization.html', 'math.html'];

files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');

    // The broken pattern is likely consistent. 
    // It starts with "// MCQ Tab Switching" and ends with "});" related to the tab logic.
    // However, since the regex in transform.js failed, we have residue.

    // Let's identify the specific broken block causing SyntaxError.
    // It looks like:
    /*
            // MCQ Tab Switching
                                // Show the selected MCQ container
                    const subject = tab.getAttribute('data-subject');
                    document.getElementById(`${subject}-mcq`).classList.add('active');

                    // Reset current question to first question of new subject
                    currentQuestion = 0;
                    initializeQuestions();
                });
            });
    */

    // We can just remove everything from "// MCQ Tab Switching" to the line before "// MCQ functionality"
    const startMarker = "// MCQ Tab Switching";
    const endMarker = "// MCQ functionality";

    const startIndex = content.indexOf(startMarker);
    const endIndex = content.indexOf(endMarker);

    if (startIndex !== -1 && endIndex !== -1) {
        console.log(`Fixing ${file}...`);
        const fixedContent = content.substring(0, startIndex) + content.substring(endIndex);
        fs.writeFileSync(file, fixedContent);
    } else {
        console.log(`Markers not found in ${file}. Manual inspection needed.`);
    }
});
