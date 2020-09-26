/*
R R G B R G B B
 R B R G B R B
  G G B R G G
   G R G B G
    B B R R
     B G R
      R B
       G
*/

let input = 'RRGBRGBB'
let inputAsArray = Array.from(input)
let currentRow = inputAsArray
let possibleColors = ['R','G','B']
let nextLetter = ''
let indentation = ' '


console.log(inputAsArray.join(' '));

for (var j = inputAsArray.length; j > 0; j--) {
  let nextRow = []

  for (var i = 0; i < currentRow.length - 1; i++) {
    if (currentRow[i] === currentRow[i+1]) {
      nextLetter = currentRow[i]
    } else {
      nextLetter = possibleColors.find(color => color !== currentRow[i] && color !== currentRow[i + 1])
    }
    nextRow.push(nextLetter)
  }
  console.log(indentation + nextRow.join(' '));
  indentation += ' '
  currentRow = nextRow
}
