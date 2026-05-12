class Solution {
    /**
     * @param {string} s
     * @return {string}
     */
    longestPalindrome(s) {
        let resIdx = 0
        let resLen = 0
        const n = s.length

        let map = Array.from({length: n}, ()=> Array(n).fill(false))

        for(let i = n -1; i >= 0;i--){
            for(let j = i; j < n; j++){
                //check if its a palindrome here
                if(s[j] == s[i] && (j -i <=2 || map[i+1][j -1])){
                    map[i][j] = true
                    if(resLen < j - i + 1){

                        resLen = j - i + 1
                        resIdx = i
                    }
                }
            }
        }
        return s.slice(resIdx, resIdx + resLen)
        
    }
}
