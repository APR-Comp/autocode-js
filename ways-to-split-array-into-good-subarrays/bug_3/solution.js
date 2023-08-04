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
    // Initialize variables
    let count = 0;
    let leftOnes = 0;
    let rightOnes = 0;

    // Loop through the array
    for (let i = 0; i < nums.length; i++) {
        // Count the number of ones on the right side of the current index
        if (nums[i] === 1) {
            rightOnes++;
        }
    }

    // Loop through the array again
    for (let i = 0; i < nums.length - 1; i++) {
        // Count the number of ones on the left side of the current index
        if (nums[i] === 1) {
            leftOnes++;
        }

        // Calculate the number of good subarray splits
        if (leftOnes === rightOnes) {
            count++;
        }
    }

    // Return the count modulo 10^9 + 7
    return count % (Math.pow(10, 9) + 7);
};
 module.exports = { numberOfGoodSubarraySplits };