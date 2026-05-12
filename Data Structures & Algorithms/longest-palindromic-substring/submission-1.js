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

        for (let i = 0; i < s.length; i++) {
            // odd length
            let l = i;
            let r = i;
            while (l >= 0 && r < s.length && s.charAt(l) === s.charAt(r)) {
                if (r - l + 1 > resLen) {
                    resIdx = l;
                    resLen = r - l + 1;
                }
                l--;
                r++;
            }

            // even length
            l = i;
            r = i + 1;
            while (l >= 0 && r < s.length && s.charAt(l) === s.charAt(r)) {
                if (r - l + 1 > resLen) {
                    resIdx = l;
                    resLen = r - l + 1;
                }
                l--;
                r++;
            }
        }

        return s.substring(resIdx, resIdx + resLen);
    }
}
