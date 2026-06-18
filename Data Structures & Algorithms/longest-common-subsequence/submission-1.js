class Solution {
    /**
     * @param {string} text1
     * @param {string} text2
     * @return {number}
     */
    longestCommonSubsequence(text1, text2) {

        /**
         * params: text1 string and text2 string
         * return: number of largest subsequence
         * example: does not onl check text1 in text2
         * pseudo: make a 2D arr  length text1 and width text2 +1 on each for out of bounds indexing
         *          - using bottom up approach
         *          - check if text1[i] == text2[j]
         *          - else get math.max of bottom or right move
         *          - only need to return dp[0][0] that has the output
         */

        let dp = Array(text1.length +1).fill().map(() => Array(text2.length + 1).fill(0))


        for(let i = text1.length - 1; i >= 0; i--){
            for(let j = text2.length -1; j >= 0; j--){
                if(text1[i] == text2[j]) dp[i][j]=  1 + dp[i +1][j+1]
                else dp[i][j] = Math.max(dp[i+1][j], dp[i][j+1])
            }
        }

        return dp[0][0]
    }
}
