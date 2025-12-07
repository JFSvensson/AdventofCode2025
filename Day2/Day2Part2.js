import ReadInput from "./ReadInput.js";

let IDRanges = ReadInput('./data/test.txt');
let addedUpIDs = 0;

for (let i = 0; i < IDRanges.length; i++) {
    let currentIDRange = IDRanges[i].split('-');

    for (let j = parseInt(currentIDRange[0]); j <= parseInt(currentIDRange[1]); j++) {
        let currentID = j.toString();
        let numberOfLetters = 1;

        if (currentID.length % 2 == 0) {

            while (numberOfLetters <= currentID.length) {
                let firstPart = currentID.slice(0, numberOfLetters);
                let nextPart = currentID.slice(numberOfLetters, numberOfLetters + 1);
                if (firstPart == nextPart) {
                    addedUpIDs 
                }
            }
        // if (currentID.length % 2 == 0) {
        //     let firstHalf = currentID.slice(0, currentID.length/2);
        //     let secondHalf = currentID.slice(currentID.length/2);

        //     if (firstHalf == secondHalf) {
        //         addedUpIDs = addedUpIDs + parseInt(firstHalf + secondHalf);
        //     }
        }
    }
}

console.log('Added up IDs: ' + addedUpIDs);
