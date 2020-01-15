/*
arr = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
function generateBoard(a){
  let result = arr.map(()=>arr)
  let counter = 1
  let startCol = 0
  let endCol = arr - 1
  let startRow = 0
  let endRow = arr - 1
  while (startCol <= endCol && startRow <= endRow) {
    for (let i = startCol; i <= endCol; i++) {
      result[startRow][i] = counter;
      counter++;
    }
    startRow++;
    for (let j = startRow; j <= endRow; j++) {
      result[j][endCol] = counter;
      counter++;
    }

    endCol--;

    for (let i = endCol; i >= startCol; i--) {
      result[endRow][i] = counter;
      counter++;
    }

    endRow--;
    for (let i = endRow; i >= startRow; i--) {
      result[i][startCol] = counter;
      counter++;
    }

    startCol++;

  }

  return result;

}
console.log(generateBoard(1))*/
function matrix(n) {
  arr=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
  let result = new Array(n).fill(arr).map(() => new Array(n).fill(arr)); // create empty n x n array
  let counter = 1;
  let startCol = 0;
  let endCol = n - 1;
  let startRow = 0;
  let endRow = n - 1;
  while (startCol <= endCol && startRow <= endRow) {
  for (let i = startCol; i <= endCol; i++) {
    result[startRow][i] = counter;
    counter++;
  }
  startRow++;
  for (let j = startRow; j <= endRow; j++) {
    result[j][endCol] = counter;
    counter++;
  }\''

  endCol--;

  for (let i = endCol; i >= startCol; i--) {
    result[endRow][i] = counter;
    counter++;
  }

  endRow--;
  for (let i = endRow; i >= startRow; i--) {
    result[i][startCol] = counter;
    counter++;
  }

  startCol++;

}

return result;

}
console.log(matrix(5))