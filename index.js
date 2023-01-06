  // SOLUTION 1: USING A FOR LOOP FOR AN ARRAY WITH MULTIPLE ELEMENTS.
  function hasTargetSum(array, target) {
  // Iterate through each number in the array
  for(let i = 0; i < array.length; i++){
    // Identify a complement that adds up to the target.
    // n steps
    const myResult =  target - array[i]
    for (let j =i+1; j < array.length; j++){
      // Check if any number in the array is our complement.
      // n * n steps.
      if (array[j] === myResult)return true
    }
  }
  // if not, return false
  return false
  }


  /* 
  Runtime:O(n^2): As the size of our array gets bigger, 
    our runtime gets twice as less efficient.
  Space complexity O(n)
  */

  /* 
  has targetSum [22, 19, 4, 6, 30]
  iterate through each number in the array
  iterate throught the rest of the array
  check if any number is our complement
  if so, return true
  if not, return false
  */

  /*
    Check through every element and comparing every other element to it
    thus ending up with a nested loop
  */


// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
