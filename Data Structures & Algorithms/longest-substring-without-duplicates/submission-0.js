class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let maxSub = 0
        let l = 0;
        let mySub = new Set()

        for(let r = 0; r < s.length; r++){
            while(mySub.has(s[r])){
                console.log(s[l])
                // dont skip r but rather move L
                mySub.delete(s[l])
                l+=1
            }
            let currWind = (r - l) + 1
            maxSub = Math.max(maxSub,currWind)
            mySub.add(s[r])
        }
        return maxSub
    }
}
