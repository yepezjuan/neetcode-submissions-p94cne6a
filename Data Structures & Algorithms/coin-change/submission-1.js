class Solution {
    /**
     * @param {number[]} coins
     * @param {number} amount
     * @return {number}
     */
    coinChange(coins, amount) {
        if(amount == 0){
            return 0
        }
         /*
            params: coins: list of diff coins, amount: target amount of money
            return: min number of coins to make up amount
            examples: if impossible to make amount return -1, unlimited of each coin
            pseudo: make some sort of map , what do we need to quickly look up
                    brute force: probably 2D array of checking cross sections

            looked upp after 13 min :/

          */

        let dp = new Array(amount + 1).fill(amount + 1)
        dp[0] = 0

        //function dfs() {}

        for(let i = 0; i <= amount; i++){
            for(let j = 0; j < coins.length; j++){
                if(coins[j] <= i){
                    dp[i] = Math.min(dp[i], 1 + dp[i - coins[j]])
                }
            }
        }
        return dp[amount] > amount ? -1 : dp[amount]
    }
}
