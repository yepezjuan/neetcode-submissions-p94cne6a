class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let left = 0
        let right = 0
        let freqMap = Array(26).fill(0)
        let longest = 0

        while(right < s.length){

            freqMap[s.charCodeAt(right) -65] += 1

            if((right - left + 1) - Math.max(...freqMap) > k){
                freqMap[s.charCodeAt(left) - 65] -= 1
                left++
            }
            longest = Math.max((right - left + 1),longest)

            right++
        }
        return longest
    }
}
