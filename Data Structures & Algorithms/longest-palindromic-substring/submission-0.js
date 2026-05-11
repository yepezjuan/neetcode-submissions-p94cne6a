class Solution {
    /**
     * @param {string} s
     * @return {string}
     */
    longestPalindrome(s) {
        /**
         * params: a string that is alphanumeric
         * return: palindrome substring
         * examples: go through string and find a palindrom
         * pseudo: need to have a L and R pointer
         * how do i go about shrinking or growing the 
         * do i need to make a map for each try ?
         * 
         * need a 2D table for memoization
         */

        let resIdx = 0;
        let resLen = 0;
        const n = s.length

        const dp = Array.from({length:n}, () => Array(n).fill(false));

        for(let i = n-1; i>= 0; i--){
            for(let j = i; j < n; j++){
                if(s[i] === s[j] && (j - i <= 2 || dp[i+1][j -1])){
                    dp[i][j] = true
                    if(resLen < j - i + 1){
                        resIdx = i
                        resLen = j - i + 1
                    }
                }
            }
        }

        return s.slice(resIdx, resIdx + resLen)
    }
}
