class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let maxLen = 0
        let left = 0
        let freaqMap = Array(26).fill(0)

        for(let right = 0; right < s.length; right++){
            freaqMap[s.charCodeAt(right)- 65] += 1
            // if the substring has more edits than available
            if((right - left + 1) - Math.max(...freaqMap) > k){
                freaqMap[s.charCodeAt(left)-65] -= 1
                left++
            }
            maxLen = Math.max((right - left + 1),maxLen)
        }

        return maxLen
    }
}
