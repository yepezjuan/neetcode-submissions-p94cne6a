class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        // no matter what we have to check all values L -> R
        // checking through R gets to the end
        let maxProf = 0
        let buy = 0
        let sell = 1
        

        while(sell < prices.length){
            let currProf = prices[sell] - prices[buy]
            maxProf = Math.max(currProf,maxProf)

            if (prices[sell] < prices[buy]){
                buy = sell 
            }
            sell++
        }


        return maxProf
    }
}
