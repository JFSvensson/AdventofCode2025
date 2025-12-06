import fs from 'fs';
import CheckDirection from '../Day1/CheckDirection.js';

function ReadInput(inputFile = 'input.txt') {
    let fileContent = fs.readFileSync(inputFile, 'utf-8');
    let splitFileContent = fileContent.split('\n');
    let movements = [];

    for (let i = 0; i < splitFileContent.length; i++) {
    let currentLine = splitFileContent[i];
    currentLine = CheckDirection(currentLine);
    movements.push(currentLine);
    }

    return movements;
}

export default ReadInput;