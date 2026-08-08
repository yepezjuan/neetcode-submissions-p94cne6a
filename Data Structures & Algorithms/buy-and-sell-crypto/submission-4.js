class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        /**
         * params: an array of ints prices
         * returns: maxProfit on possible trades
         * examples: no negative values, up to 100 days added
         * psuedo: want to keep track of: dayBought, daySold and maxProfit (return val)
         *          keep daySold moving along all possibel values
         *          only move dayBought when daySold < dayBought
         *          do a math.max on profit(curr and max)
         *          return max :D
         */

        let dayBought = 0
        let daySold = 1
        let maxProfit = 0

        while(daySold < prices.length){
            let currProfit = prices[daySold] - prices[dayBought]
            maxProfit = Math.max(currProfit, maxProfit)

            if(prices[daySold] < prices[dayBought]) dayBought = daySold
            daySold++
        }

        return maxProfit
    }
}
