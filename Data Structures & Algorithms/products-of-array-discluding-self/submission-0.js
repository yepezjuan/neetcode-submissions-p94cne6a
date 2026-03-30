class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {

        let output = []
        let prefix = []
        let postfix = []

        for(let i = 0; i < nums.length; i++){
            if(i == 0) prefix.push(1)

            else{
                prefix.push(prefix[i-1]* nums[i-1])
            }
        }

        for(let i = nums.length - 1; i >= 0 ; i --){
            if(i == nums.length - 1 ) postfix.unshift(1)
            else {
                postfix.unshift(postfix[0]*nums[i+1])
            }
        }

        for(let i = 0; i < nums.length; i++){
            output.push(prefix[i] * postfix[i])
        }
        return output
    }
}
