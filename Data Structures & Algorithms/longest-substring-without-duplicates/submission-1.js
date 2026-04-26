class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {

        /*
         * params: given a string (s)
         * return: an int
         * example: not sure what to do at this step
         * pseudo:
         *      need to keep track of maxLen
         *      returning output
         *      look at a char
         *      check if char in set
         *      am i keeping a copy of substring?
         */
        let output = 0
        let l = 0
        let mySet = new Set()

        for(let r = 0; r < s.length; r++) {
            while(mySet.has(s[r])){ 
                mySet.delete(s[l])
                l++;
            }

            
            let currWindow = (r-l+1)
            output = Math.max(output,currWindow)
            mySet.add(s[r])
        }

        

        return output
    }
}
