class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    countSubstrings(s) {
        /*
         * param: a string [s]
         * return: int of palindromes 
         * examples: each char is a palind
         * pseudo: feels similiar to other palindrome problem 
         *          need to make 2D map, 
         *          check for strings of all sizes (1,2,3...n-1)
         *          
         */

         const n = s.length
         let map = Array.from({length:n}, ()=> Array(n).fill(false))
         let output = 0


         for(let i = n -1; i >= 0;i--){
            for(let j = i; j < n; j++){
                if(s[i] == s[j] && (j - i <= 2 || map[i+1][j-1] ))
                {
                    map[i][j] = true
                    output++
                    
                }
            }
        }
        return output
    }
}
