class Solution {
    /**
     * @param {string} text1
     * @param {string} text2
     * @return {number}
     */
    longestCommonSubsequence(text1, text2) {

        /**
         * params: string 1 and string 2
         * return: length of longest subsequence
         * example: seems to only check if string1 in string2
         * pseudo: need to store smaller problems somewhere
         *          - not sure if 2D arr or 2 Maps?
         *          - comparing each char of both strings?
         *          - CANNOT change ordering
         *          - a set of all chars they both have
         *          - top down: begin by checking the whole string before it breaks
         *          - bottom up: 
         */

        let dp = Array(text1.length + 1).fill().map(() => Array(text2.length + 1).fill(0))

        for(let i = text1.length -1; i>= 0; i--){
            for(let j = text2.length -1; j >=0; j--){
                if(text1[i] == text2[j]){
                    dp[i][j] = 1 + dp[i+1][j+1]
                }
                else{
                    dp[i][j] = Math.max(dp[i+1][j], dp[i][j+1])
                }
            }
        }

        return dp[0][0]
        
    }
}
