class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        /**
         * params: a string s
         * return: max substring length
         * examples: no dupes in sub, min : 0 , max : 50,000
         * pseduo:
         */

        // keep track of maxSub:
        // or do we just need to keep track of ptrs? maybe both
        // loop while r < nums.length kind of like max profit\
        // check if new char is in currSub, keep moving left ptr while its repeating

        let currSub = new Set()
        let left = 0
        let right = 0
        let maxSub = 0

        while(right < s.length){
            while(currSub.has(s[right])){
                currSub.delete(s[left])
                left++
            }
            currSub.add(s[right])
           
            maxSub = Math.max(maxSub, currSub.size)
            right++
        }
        return maxSub

    }
}
