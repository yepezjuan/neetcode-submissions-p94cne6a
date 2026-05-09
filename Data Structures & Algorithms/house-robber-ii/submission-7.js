class Solution {
    /*
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {


        
        const memo1 = new Array(nums.length).fill(-1)
        const memo2 = new Array(nums.length).fill(-1)
        
        // curry function
        function dfs(i,end, memo){

            if (nums.length === 1) return nums[0];
            //kinda same conditionals as robbers 1
            /**something about a flag here */
            if(i > end ) return 0
            if(memo[i] !== -1) return memo[i]

            memo[i] = Math.max(
                nums[i] + dfs(i + 2,end, memo),
                dfs(i + 1, end, memo)
            )

            return memo[i]
        }

        return Math.max(dfs(0,nums.length -2,memo1), dfs(1,nums.length -1, memo2))

    }
}
