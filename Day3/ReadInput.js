import fs from 'fs';

function ReadInput(inputFile = 'input.txt') {
    let fileContent = fs.readFileSync(inputFile, 'utf-8');
    let IDRanges = fileContent.split('\n');
    
    return IDRanges;
}

export default ReadInput;