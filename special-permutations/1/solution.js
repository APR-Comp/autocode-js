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
  // Sort the array in non-decreasing order
  nums.sort((a, b) => a - b);
  
  const n = nums.length;
  const mod = 1e9 + 7;
  
  // Create a 2D array to store the number of special permutations
  const dp = new Array(n).fill(0).map(() => new Array(n).fill(0));
  
  // Initialize the diagonal elements of dp with 1
  for (let i = 0; i < n; i++) {
    dp[i][i] = 1;
  }
  
  // Calculate the number of special permutations using dynamic programming
  for (let i = n - 2; i >= 0; i--) {
    for (let j = i + 1; j < n; j++) {
      for (let k = i; k < j; k++) {
        if (nums[j] % nums[k] === 0) {
          dp[i][j] = (dp[i][j] + dp[i][k]) % mod;
        }
        if (nums[k] % nums[j] === 0) {
          dp[i][j] = (dp[i][j] + dp[k][j]) % mod;
        }
      }
    }
  }
  
  // Calculate the total number of special permutations
  let count = 0;
  for (let i = 0; i < n; i++) {
    count = (count + dp[0][i]) % mod;
  }
  
  return count;
};
 module.exports = { specialPerm };