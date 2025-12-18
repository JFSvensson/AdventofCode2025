import ReadInput from "./ReadInput.js";

let batteryData = ReadInput('./data/input.txt');

for (let i = 0; i < batteryData.length; i++) {
    console.log('Data Line ' + i + ': ' + batteryData[i]);
    //forEach??
}