
// ------------------------------------------ G E T   R A N G E   A R R A Y ------------------------------------------
function getRangeArray(start, stop, step)      // Get an array containing a sequence of numbers between specified values
{  
  var rangeArr = [];                           

  for(let i = start; i <= stop; i = i + step)  
  {
    rangeArr.push(i);
  }

  return rangeArr;
}