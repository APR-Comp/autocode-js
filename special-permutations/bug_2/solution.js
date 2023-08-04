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
    
    // Initialize an array to store the number of special permutations for each index
    var dp = new Array(nums.length).fill(0);
    
    // Initialize the base case where there is only one number in the array
    dp[0] = 1;
    
    // Iterate through the array starting from the second number
    for (var i = 1; i < nums.length; i++) {
        // Iterate through all previous numbers to check if they divide the current number or vice versa
        for (var j = 0; j < i; j++) {
            if (nums[i] % nums[j] === 0 || nums[j] % nums[i] === 0) {
                // Add the number of special permutations for the previous number to the current number
                dp[i] += dp[j];
            }
        }
    }
    
    // Calculate the total number of special permutations by summing up the number of special permutations for each index
    var total = 0;
    for (var i = 0; i < dp.length; i++) {
        total += dp[i];
    }
    
    // Return the total number of special permutations modulo 10^9 + 7
    return total % 1000000007;
};
 module.exports = { specialPerm };