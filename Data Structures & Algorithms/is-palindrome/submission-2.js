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

        let newS = s.split(" ").join("").split("").filter(
            (char) => {
                if((65 <= char.charCodeAt(0) && char.charCodeAt(0) <= 90)|| 
                (97 <= char.charCodeAt(0) && char.charCodeAt(0) <= 122) ||
                (48 <= char.charCodeAt(0) && char.charCodeAt(0) <= 57)) return true
            }
        )


        let left = 0
        let right = newS.length - 1

        while(left < right){

            if(newS[left].toLowerCase() != newS[right].toLowerCase()){
                return false
            }
            left++
            right--
        }
        return true
    }
}
