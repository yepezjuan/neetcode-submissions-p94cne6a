class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) { 
        //want to see if its a letter first
        // clean it up using ascii values
        //then combine it back
        // while loop L < R 

        let newS = [...s.toLowerCase()].filter(c => {
            let code  = c.charCodeAt(0);
            return (code >= 97 && code <= 122) || (code >= 48 && code <= 57)
        })


        let left = 0 
        let right = newS.length - 1

        while( left < right){
            if(newS[left] != newS[right]) return false
            left++
            right--
        }

        return true
    }
}
