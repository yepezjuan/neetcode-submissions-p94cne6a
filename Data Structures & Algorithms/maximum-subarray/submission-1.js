class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxSubArray(nums) {

        /**
         * params: int array 
         * return: max sum (need to keep currMaxSum)
         * example: need to keep track of indexes
         * psuedo: cannot be sorted bc we need a subarray
         *         use currSum, leftPtr, rightPtr
         * 
         */

        let currSum = 0
        let maxSum = nums[0]

        for(const num of nums){
            if(currSum < 0) currSum = 0
            currSum += num
            maxSum = Math.max(currSum, maxSum)
        }

        return maxSum
    }
}
