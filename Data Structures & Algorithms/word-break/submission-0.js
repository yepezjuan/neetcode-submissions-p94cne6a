class Solution {
    /**
     * @param {string} s
     * @param {string[]} wordDict
     * @return {boolean}
     */
    wordBreak(s, wordDict) {
        /*
         * dict 
         * params: string s and wordDict []
         * return: bool
         * examples: check if char is a string, only lowercase values
         * pseudo: how to parse a char to check if string, do not need to use all words
         * whats the sub problem? is a char a string 
         */
        let dp = new Array(s.length + 1).fill(false)
        dp[s.length] = true
        const wordSet = new Set(wordDict)

        for(let c = s.length -1; c >= 0; c--){
            for(let word of wordSet){
                if(c + word.length <= s.length && s.substring(c, c + word.length) === word){
                    dp[c] = dp[c + word.length]
                }
                if(dp[c]){
                    break
                }

            }
        }
        
        return dp[0]
    }
}
