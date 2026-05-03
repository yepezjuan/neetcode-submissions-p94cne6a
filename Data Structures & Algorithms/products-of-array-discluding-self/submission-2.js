class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let n = nums.length
        let pre = [1]
        let post = [1]
        let output = []
        


        for(let i = 1; i < n; i++){
             pre.push(pre[i-1]* nums[i-1])
        }
        //built diff!!
        for(let i = n-2; i>=0; i--){
            post.unshift(post[0]* nums[i+1])
        }

        for(let i = 0; i < n; i++){
            output[i] = pre[i] * post[i]
        }
        return output
    }
}
