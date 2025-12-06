function CheckDirection (currentLine) {
  let lengthOfLine = currentLine.length;
  
  if (currentLine.startsWith('L')) {
    currentLine = currentLine.slice(1, lengthOfLine);
    currentLine = -parseInt(currentLine);
  }
  else if (currentLine.startsWith('R')) {
    currentLine = currentLine.slice(1, lengthOfLine);
    currentLine = parseInt(currentLine);
  }

  return currentLine;
}

export default CheckDirection;