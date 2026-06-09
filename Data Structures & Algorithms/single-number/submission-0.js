class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    singleNumber(nums) {
        /**
         * params: integer array nums
         * return: val that is not repeated
         * examples: have to return val using only O(1) space complexity
         * pseudo: brute force would be: make a freqmap
         *          but can only take up O(1) space
         *           cannot sort bc that takes up o(nlogn) :/
         *              
         */

        let output = 0

        for(let i of nums){
            output ^= i
        }
        return output
    }
}
