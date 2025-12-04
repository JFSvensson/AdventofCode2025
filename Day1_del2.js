import fs from 'fs';

let fileContent = fs.readFileSync('input.txt', 'utf-8');
let splitFileContent = fileContent.split('\n');
let movements = [];

for (let i = 0; i < splitFileContent.length; i++) {
  let currentLine = splitFileContent[i];
  let lengthOfLine = currentLine.length;
  if (currentLine.startsWith('L')) {
    currentLine = currentLine.slice(1, lengthOfLine);
    currentLine = -parseInt(currentLine);
  }
  else if (currentLine.startsWith('R')) {
    currentLine = currentLine.slice(1, lengthOfLine);
    currentLine = parseInt(currentLine);
  }
  movements.push(currentLine);
}

const startValue = 50;
let currentValue = startValue;
let zeroCount = 0;

for (let k = 0; k < movements.length; k++) {
  let signOfValueBefore = Math.sign(currentValue);
  currentValue = currentValue + movements[k];
  let signOfValueAfter = Math.sign(currentValue);
  if (signOfValueAfter !== 0) {
    if (signOfValueBefore !== signOfValueAfter) {
    zeroCount = zeroCount + 1;
    console.log('Zero crossed at movement index: ' + k);
  } 
  }
  while (currentValue > 99) {
    currentValue = currentValue - 100;
  }
  while (currentValue < 0) {
    currentValue = currentValue + 100;
  }
  if (currentValue === 0) {
    zeroCount = zeroCount + 1;
    console.log('Zero reached at movement index: ' + k);
  }
}
console.log(zeroCount);
    
