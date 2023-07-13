/**javscript 
 You are given a 0-indexed integer array nums containing n distinct positive integers. A permutation of nums is called special if:

For all indexes 0 <= i < n - 1, either nums[i] % nums[i+1] == 0 or nums[i+1] % nums[i] == 0.

Return the total number of special permutations. As the answer could be large, return it modulo 109 + 7.
 
Example 1:

Input: nums = [2,3,6]
Output: 2
Explanation: [3,6,2] and [2,6,3] are the two special permutations of nums.

Example 2:

Input: nums = [1,4,3]
Output: 2
Explanation: [3,1,4] and [4,1,3] are the two special permutations of nums.

 
Constraints:

2 <= nums.length <= 14
1 <= nums[i] <= 109

 **/
var specialPerm = function(nums) {
  // sort the nums array in ascending order
  nums.sort((a, b) => a - b);
  
  // create a variable to store the total number of special permutations
  let count = 0;
  
  // create a helper function to calculate the number of special permutations
  const calculatePermutations = function(nums, currentPermutation) {
    // base case: if all elements have been used, increment the count
    if (currentPermutation.length === nums.length) {
      count++;
      return;
    }
    
    // loop through the nums array
    for (let i = 0; i < nums.length; i++) {
      // check if the current element can be added to the current permutation
      if (!currentPermutation.includes(nums[i])) {
        // check if the current element satisfies the special permutation condition
        if (currentPermutation.length === 0 || nums[i] % currentPermutation[currentPermutation.length - 1] === 0) {
          // recursively call the helper function with the updated current permutation
          calculatePermutations(nums, currentPermutation.concat([nums[i]]));
        }
      }
    }
  }
  
  // call the helper function with an empty current permutation
  calculatePermutations(nums, []);
  
  // return the count modulo 10^9 + 7
  return count % (Math.pow(10, 9) + 7);
};
 module.exports = { specialPerm };