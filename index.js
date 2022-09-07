function hasTargetSum(array, target) {
  // Write your algorithm here

  //iterate through the array
  for (let startIndex = 0; startIndex < array.length; startIndex++){
    const complement = target - array[startIndex];
    for (let endIndex = startIndex + 1; endIndex<array.length; endIndex++){
      if (array[endIndex] === complement){
        return true;
      }
    }
    }
    return false
}

/* 
  Write the Big O time complexity of your function here
*/


/* 
  Add your pseudocode here
  iterate through the array
  for the current number identify a complement
  check if number is our complement
*/


/*
  Add written explanation of your solution here
  if the numer is our complement, it returns true, else false
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
