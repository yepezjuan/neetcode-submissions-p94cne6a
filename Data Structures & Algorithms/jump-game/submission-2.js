class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    canJump(nums) {
        let goal = nums.length -1
        for(let right = nums.length - 1; right >= 0;right--){
            if(right + nums[right] >= goal) goal = right
        }

        return goal == 0? true: false
    }
}
