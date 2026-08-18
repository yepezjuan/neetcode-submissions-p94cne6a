class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        /**
         * params: string s, int k swap amount
         * return: maxLength: need to keep track of this somehow
         * examples: the string i measure, repeats only 1 char
         *              ascii codes are only upper case
         * pseudo: window problem, cant use a set repeating chars, 
         *          will be needing pointers to make substring, 
         *          theres a method for this !!
         *          not sure to use arr or just a counter
         *          will be manipulating k throughout runtime
         *          
         *      
         */

        let left = 0;
        let right = 0;
        let longest = 0
        let freqMap = Array(26).fill(0)

        while(right < s.length){
            freqMap[s.charCodeAt(right) - 65] += 1

            if((right - left + 1) - Math.max(...freqMap) > k){
                freqMap[s.charCodeAt(left) - 65] -= 1
                left++
            }
            longest = Math.max(right - left + 1, longest)
            right++
        }

        return longest
        
    }
}
