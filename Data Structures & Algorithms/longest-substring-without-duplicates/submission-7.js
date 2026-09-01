class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let left = 0 
        let right = 0
        let currSub = new Set()
        let maxSub = 0

        while(right < s.length){
            while(currSub.has(s[right])){
                currSub.delete(s[left])
                left++
            }
            currSub.add(s[right])
            maxSub = Math.max(currSub.size, maxSub)

            right++

        }

        return maxSub
    }
}
