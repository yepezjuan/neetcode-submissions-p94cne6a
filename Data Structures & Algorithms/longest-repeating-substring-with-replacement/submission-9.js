class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        /**
         * params: string s, int k swaps available
         * return: int max len of repeating chars
         * examples: (provide) use of upper case only
         * pseudo: need L and R ptrs
         *          converting s into a freqmap
         *          running all of s checking if sub  - largest freq map < k
         *          using max variable to keep track of everything
         */

        let freqMap = Array(26).fill(0)

        let left = 0
        let right = 0

        let maxString = -Infinity

        while(right < s.length){ // anki: .length is a proporty

            freqMap[s.charCodeAt(right) - 65] += 1

            if((right - left + 1) - Math.max(...freqMap) > k){
                freqMap[s.charCodeAt(left) -65] -= 1
                left++
            }
            maxString = Math.max((right - left + 1), maxString)

            right++
        }
        return maxString
    }
}
