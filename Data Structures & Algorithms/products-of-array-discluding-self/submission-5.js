class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        /**
         * params: nums array
         * return output array prefix * suffix
         * examples: reviewed examples
         * pseudo: build prefix. build suffix
         *          then loop through both 
         *           return that array
         */
        let prefix = [1]
        let suffix = [1]
        let output = []

        for(let i = 1; i < nums.length; i++){
            prefix.push(nums[i-1] * prefix[i-1])
        }

        for(let i = nums.length -2; i >= 0; i--){
            suffix.unshift(nums[i+1] * suffix[0])
        }


        for(let i = 0; i < nums.length; i++){
            output.push(prefix[i] * suffix[i])
        }
        return output
    }
}
