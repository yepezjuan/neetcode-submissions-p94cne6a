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

        // need to start one index before the end
        for(let i = nums.length - 2; i >=0; i--){
            suffix.unshift(suffix[0] * nums[i+1])
        }

        for(let i = 0; i < nums.length; i++){
            output.push(suffix[i]*prefix[i])
        }

        return output 
    }
}
