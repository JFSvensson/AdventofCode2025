import ReadInput from "./Day_del2/ReadInput.js";

let movements = ReadInput('input.txt');

const startValue = 50;
let currentValue = startValue;
let zeroCount = 0;

for (let k = 0; k < movements.length; k++) {
  let valueBefore = currentValue;
  let rawAfter = currentValue + movements[k];
  let valueAfter = ((rawAfter % 100) + 100) % 100; // Applicera modulo direkt!

  let timesCrossed = 0;

  if (movements[k] > 0) {
    // För positiva: räkna från nästa heltal
    timesCrossed = Math.floor((valueBefore + movements[k]) / 100) - Math.floor(valueBefore / 100);
  } else if (movements[k] < 0) {
    timesCrossed = Math.floor(valueBefore / 100) - Math.floor((valueBefore + movements[k]) / 100);
  }

  if (valueAfter === 0 && valueBefore !== 0 && timesCrossed === 0) {
    timesCrossed = 1;
  }

  // Om du startar på 0, dra bort 1 korsning (första passagen räknas inte)
  if (valueBefore === 0 && timesCrossed > 0) {
    // MEN: Om du landar tillbaka på 0, dra INTE av (alla korsningar är reella)
    if (valueAfter !== 0) {
        timesCrossed = timesCrossed - 1;
    }
  }

  // Skriv ut movements 120-140
  if (k >= 120 && k <= 140) {
    console.log(`Movement ${k}: ${movements[k]}, from ${valueBefore} to ${valueAfter}, rawAfter: ${rawAfter}, crossings: ${timesCrossed}`);
  }

  zeroCount = zeroCount + timesCrossed;

  currentValue = valueAfter; // Använd det modulo-justerade värdet
}

console.log(zeroCount);
