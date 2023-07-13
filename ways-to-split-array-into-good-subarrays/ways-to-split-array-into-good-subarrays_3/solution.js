/**javscript 
 You are given a binary array nums.
A subarray of an array is good if it contains exactly one element with the value 1.
Return an integer denoting the number of ways to split the array nums into good subarrays. As the number may be too large, return it modulo 10^9 + 7.
A subarray is a contiguous non-empty sequence of elements within an array.
 
Example 1:

Input: nums = [0,1,0,0,1]
Output: 3
Explanation: There are 3 ways to split nums into good subarrays:
- [0,1] [0,0,1]
- [0,1,0] [0,1]
- [0,1,0,0] [1]

Example 2:

Input: nums = [0,1,0]
Output: 1
Explanation: There is 1 way to split nums into good subarrays:
- [0,1,0]

 
Constraints:

1 <= nums.length <= 10^5
0 <= nums[i] <= 1

 **/
var numberOfGoodSubarraySplits = function(nums) {

    var count = 0; // Initialize count to 0
    var result = 0; // Initialize result to 0
    var mod = Math.pow(10, 9) + 7; // Define the modulo value
    
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] == 1) {
            count++; // Increment count by 1 when encountering a 1
        } else {
            result += Math.floor(count / 2); // Add the number of good subarray splits to the result
            count = 0; // Reset count to 0
        }
    }
    
    result += Math.floor(count / 2); // Add the number of good subarray splits to the result
    
    return result % mod; // Return result modulo 10^9 + 7
};
 module.exports = { numberOfGoodSubarraySplits };