class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    lengthOfLIS(nums) {
        /**
         * params: array nums [not sorted]
         * return: int max length
         * examples: numbers dont have to be right next to each other
         * pseudo: keep track of min
         *          loop through all values and check min 
         *          if theres a smaller min swap and restart 
         *          dp means to have some sort of ds to store mini answers
         *          OR to have a couple single vars storing info
         */

        const n = nums.length;
        const memo = new Array(n).fill(-1);

        const dfs = (i) => {
            if (memo[i] !== -1) {
                return memo[i];
            }

            let LIS = 1;
            for (let j = i + 1; j < n; j++) {
                if (nums[i] < nums[j]) {
                    LIS = Math.max(LIS, 1 + dfs(j));
                }
            }

            memo[i] = LIS;
            return LIS;
        };

        return Math.max(...nums.map((_, i) => dfs(i)));

    }
}
