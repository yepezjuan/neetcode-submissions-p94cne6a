class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        // my code works if its verified to be alphanumeric

        let newS = s.split(" ").join("").split("").filter(
            (char) => {
                 if((65 <= char.charCodeAt(0) && char.charCodeAt(0) <= 90)|| 
                (97 <= char.charCodeAt(0) && char.charCodeAt(0) <= 122) ||
                (48 <= char.charCodeAt(0) && char.charCodeAt(0) <= 57)) return true
            }
        )
        let l = 0
        let r = newS.length - 1

        while(l < r){
            if(newS[l].toLowerCase() != newS[r].toLowerCase()) return false

            l++
            r--
        }
        return true
    }
}
