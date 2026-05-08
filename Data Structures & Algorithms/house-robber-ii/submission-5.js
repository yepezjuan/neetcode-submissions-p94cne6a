class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {

        if (nums.length === 1) return nums[0];

        function dfs(i, end, memo) {
            if (i > end) return 0;
            if (memo[i] !== -1) return memo[i];
            
            memo[i] = Math.max(
                dfs(i + 1, end, memo),           // skip house
                nums[i] + dfs(i + 2, end, memo)  // rob house
            );
            return memo[i];
        }

        const memo1 = new Array(nums.length).fill(-1);
        const memo2 = new Array(nums.length).fill(-1);

        return Math.max(
            dfs(0, nums.length - 2, memo1),  // exclude last
            dfs(1, nums.length - 1, memo2)   // exclude first
        );
    }
}
