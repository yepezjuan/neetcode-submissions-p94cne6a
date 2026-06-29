class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        // my code works if its verified to be alphanumeric

        let newS = [...s.toLowerCase()].filter(c => {
        let code = c.charCodeAt(0);
        return (code >= 97 && code <= 122) || (code >= 48 && code <= 57);
        });
        let l = 0
        let r = newS.length - 1

        while(l < r){
            if(newS[l] != newS[r]) return false

            l++
            r--
        }
        return true
    }
}
