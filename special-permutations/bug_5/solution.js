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
  // Sort the array in ascending order
  nums.sort((a, b) => a - b);
  
  // Create a memoization table to store calculated results
  const memo = new Array(nums.length).fill(-1);
  
  // Recursively find the number of special permutations
  const dfs = (index, prev) => {
    // If we have reached the end of the array, return 1
    if (index === nums.length) {
      return 1;
    }
    
    // If the result for this index has already been calculated, return it
    if (memo[index] !== -1) {
      return memo[index];
    }
    
    let count = 0;
    
    // Iterate through all possible next values from the current index
    for (let i = index; i < nums.length; i++) {
      // Check if the current value is divisible by the previous value or vice versa
      if (nums[i] % prev === 0 || prev % nums[i] === 0) {
        // Recursively find the number of special permutations starting from the next index
        count += dfs(index + 1, nums[i]);
      }
    }
    
    // Store the result for this index in the memoization table
    memo[index] = count;
    
    return count;
  };
  
  // Start the recursion from the first index with a previous value of 1
  return dfs(1, nums[0]);
};
 module.exports = { specialPerm };