class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let prefix = [1]
        let suffix = [1]
        let output = []

        for(let i = 1; i < nums.length; i++){
            prefix.push(prefix[i-1] * nums[i-1])
        }

        for(let i = nums.length - 2; i >= 0; i--){
            suffix.unshift(suffix[0] * nums[i+1])
        }

        for(let i = 0; i < nums.length; i++){
            output[i] = prefix[i] * suffix[i]
        }

        console.log(suffix)
        return output

        /**
         * params: int arr nums
         * return: output int arr
         * examples: negatives seem to be included in data
         * pseudo: need to use a pre and suf fix to solve in O(n)
         */
    }
}
