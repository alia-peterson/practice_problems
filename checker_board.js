
let numberRows = 1
let numberColumns = 1
let currentRow = 0

function checkerBoard(numberRows, numberColumns) {

  for (var j = 0; j < numberRows; j++) {
    let row = ''

    for (var i = currentRow; i < numberColumns + currentRow; i++) {

      if (i % 2 === 0) {
        row = row + ' '
      } else {
        row = row + 'X'
      }
    }
    console.log(row);
    currentRow++
  }
}

checkerBoard(5,6)
