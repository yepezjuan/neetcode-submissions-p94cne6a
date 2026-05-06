class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {

        // want to keep track of visited indexs

        // dont think im breaking down the problem enough
        //yup its dfs
        const memo = {}
        function dfs(i) {
            
            if(i >= nums.length) return 0
            if (memo[i] != undefined) return memo[i]

            memo[i] = Math.max(dfs(i + 1), nums[i] + dfs(i + 2))

            return memo[i]
        }

        return dfs(0)


        /**
         * params: list nums
         * returns: max amount money stolen
         * examples: mostly begin w [0]
         * psuedo: how do i break this down even smaller problems
         *         our only 2 options [i] OR [i-1]
         */
    }
}
