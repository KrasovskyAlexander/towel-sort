
// You should implement your task here.

module.exports = function towelSort (matrix = []) {
  if(!matrix.length) return [];
  let newArr =[];
  matrix.forEach((item,i) =>{
    if(i%2==0){
      item.forEach(element => {
        newArr.push(element);
      });
    }else{
      item = item.reverse();
      item.forEach(element => {
        newArr.push(element);
      });
    }
  })
  return newArr;
}
