import fs from 'fs';

let fileContent = fs.readFileSync('input.txt', 'utf-8');
let splitFileContent = fileContent.split('\n');

let movement = [];

for (let i = 0; i < splitFileContent.length; i++) {
  let currentLine = splitFileContent[i];
  let lengthOfLine = currentLine.length;
  if (currentLine.startsWith('L')) {
    currentLine = currentLine.slice(1, lengthOfLine);
    currentLine = -parseInt(currentLine);
  }
  console.log(currentLine);
}

// let sequence = [];
