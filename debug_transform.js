const fs = require('fs');

const html = fs.readFileSync('unit1.html', 'utf8');

console.log(`Unit 1 Size: ${html.length}`);

let searchIdx = 0;
let count = 0;

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

while (true) {
    const marker = '<div class="subject-container">';
    const start = html.indexOf(marker, searchIdx);
    if (start === -1) {
        console.log("No more subject containers found.");
        break;
    }

    const end = findClosingDiv(html, start + marker.length);
    console.log(`Found container at ${start}, Ends at ${end}, Length: ${end - start}`);

    if (end > start) {
        const block = html.substring(start, end);
        // Extract Header
        const headerMatch = block.match(/<h3>(.*?)<\/h3>/);
        if (headerMatch) {
            console.log(`HEADER: ${headerMatch[1]}`);
        } else {
            console.log("NO HEADER FOUND in block");
        }
    }

    searchIdx = start + 1;
    count++;
}
console.log(`Total containers: ${count}`);
