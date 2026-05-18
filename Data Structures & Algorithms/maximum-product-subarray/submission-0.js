class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxProduct(nums) {
        /**
         * params: list nums (+) and (-)
         * return: max prod of subarray
         * examples: can be single element or (-) * (-)
         * psuedo: store a 2D map for easy O(n) lookup
         * I GUESS I WAS WRONG
         */
        
        let max = 1 
        let min = 1
        let output = nums[0] //first num seen

        for(const num of nums){
            const temp = max * num // taking curring max and add prod of curr num
            max = Math.max(min * num, num, temp)

            min = Math.min(min * num,num,temp)
            output = Math.max(output, max)
        }
        return output
    }
}
