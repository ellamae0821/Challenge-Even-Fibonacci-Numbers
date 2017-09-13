/**
 * Return the total sum of all even fibonacci numbers up to and including
 * the value given to you at `maxFibValue`
 *
 * @param  {Number} maxFibValue
 * @return {Number} sum
 */
function _sumFibs( maxFibValue ) {
  var sum = 0;
  var fibSequence = [0 , 1];



  // do your work here
  while (maxFibValue > fibSequence[fibSequence.length-1]){
    fibSequence.push(fibSequence[fibSequence.length-1] + fibSequence[fibSequence.length-2]);
    if (fibSequence[fibSequence.length-1] % 2 === 0){
      sum += fibSequence[fibSequence.length-1];
    }
  }
  return sum;
}
console.log(_sumFibs(4000000));

// bonus round
function _highestFibonacciNumber (maxFibValue){
  var highest = 0;

  //define your base case, validate your input

  var fibSequence = [0 , 1];


  //do your work here
  while (maxFibValue > fibSequence[fibSequence.length-1]){
    fibSequence.push(fibSequence[fibSequence.length-1] + fibSequence[fibSequence.length-2]);
    if (fibSequence[fibSequence.length-1] % 2 === 0){
      highest = fibSequence[fibSequence.length-2];
      console.log(highest);
    }
  }
  return highest;
};

/**
 * Do not modify code below.
 * You must be at least level 10 to understand.
 */
module.exports = {
  sumFibs : _sumFibs,
  highestFibonacciNumber : _highestFibonacciNumber
};