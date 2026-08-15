class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let currSub = new Set()
        let maxSub = 0
        let left = 0
        let right = 0

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
