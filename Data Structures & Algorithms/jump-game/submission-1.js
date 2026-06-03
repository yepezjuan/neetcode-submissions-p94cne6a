class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    canJump(nums) {
        let jumps = nums.length -1
        for(let right = nums.length - 1; right >= 0;right--){
            if(right + nums[right] >= jumps) jumps = right
        }

        return jumps == 0? true: false
    }
}
