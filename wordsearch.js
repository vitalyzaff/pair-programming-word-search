const wordSearch = (letters, word) => {
  const horizontalJoin = letters.map(ls => ls.join(''));
  for (let l of horizontalJoin) {
    if (l.includes(word)) {
      return true;
    }
  }
  const vertical = transpose(letters);
  if (vertical) {
    const verticalJoin = vertical.map(ls => ls.join(''));
    for (let l of verticalJoin) {
      if (l.includes(word)) {
        return true;
      }
    }
  }
  return false;
};
  
const transpose = function(matrix) {
  let matrixReloaded = [];
    
  matrix.map((rowY, indY) => {
    rowY.map((columnX, indX) => {
      if (indY === 0) {
        matrixReloaded.push([]);
      }
      matrixReloaded[indX].push(matrix[indY][indX]);
    });
  });
  return matrixReloaded;
};

module.exports = wordSearch;