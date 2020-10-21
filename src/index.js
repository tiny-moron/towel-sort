
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if(typeof matrix != "object" || matrix.length == 0) return [];
  var answ = [];
  for (let i = 0; i < matrix.length; i++) {
    if((i + 1) % 2 != 0) {
      for (let j = 0; j < matrix[i].length; j++) {
        answ.push(matrix[i][j]);
      }
    } else {
      for (let j = matrix[i].length - 1; j >= 0 ; j--) {
        answ.push(matrix[i][j]);
      }
    }
  }
  return answ;  
}
