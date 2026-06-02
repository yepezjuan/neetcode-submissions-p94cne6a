class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    canJump(nums) {
        /**
         * params: int array nums
         * return: bool, if can make it to end of nums from 0
         * examples: cannot skip numbers, have to take full jumps
         * pseudo: use a while loop for [i]
         *          does not really feel like a greedy problem
         * 
         */
        
        
        
        let goal = nums.length - 1
        
        for(let i = nums.length -1; i >=0; i--) {
            if(i + nums[i] >= goal) goal = i
        }

        return goal == 0? true : false
    }
}
