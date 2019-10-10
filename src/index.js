module.exports = function zeros(expression) {
  let regExMultiply = /\*/;
  let arr = expression.split(regExMultiply);
  let result = 0;
  for (let item of arr) {
    let addArr = item.split('');
    let m = addArr.length-1;
    let n = addArr.length-2;
    let i;  
    let numOfZeros = 0;
    if (addArr[m] == addArr[n]) { 
      addArr.pop();
      addArr.pop();
      i = +addArr.join('');
      do {
        if (i%5 == 0){
          numOfZeros++;
          if (i%25 == 0){
            numOfZeros++;
          }
          i--;
          i--;
        }
        else {
          i--;
          i--;
        }  
      }
      while (i > 0);
    }
    else { 
      addArr.pop();
      i = +addArr.join('');
      do {
        if (i%5 == 0){
          numOfZeros++;
          if (i%25 == 0){
            numOfZeros++;
          }
        }
        i--;
      }
      while (i > 1);
    }
    result = result + numOfZeros;
  }
  return result;
}
