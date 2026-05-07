class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        const memo = {}

        function dfs(i){
            if(memo[i] != undefined) return memo[i]
            if(i >= nums.length) return 0

            memo[i] = Math.max(dfs(i + 1) , nums[i] + dfs(i + 2))

            return memo[i]
        }   // here checking ifevery other i is best
            //OR if the neighbor path is best
        return dfs(0)
    }
}
