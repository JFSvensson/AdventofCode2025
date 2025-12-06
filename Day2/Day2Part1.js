import ReadInput from "./ReadInput.js";

let IDRanges = ReadInput('./data/input2.txt');
let addedUpIDs = 0;

for (let i = 0; i < IDRanges.length; i++) {
    let currentIDRange = IDRanges[i].split('-');

    for (let j = parseInt(currentIDRange[0]); j <= parseInt(currentIDRange[1]); j++) {
        let currentID = j.toString();

        if (currentID.length % 2 == 0) {
            let firstHalf = currentID.slice(0, currentID.length/2);
            let secondHalf = currentID.slice(currentID.length/2);

            if (firstHalf == secondHalf) {
                addedUpIDs = addedUpIDs + parseInt(firstHalf + secondHalf);
            }
        }
    }
}

console.log('Added up IDs: ' + addedUpIDs);
