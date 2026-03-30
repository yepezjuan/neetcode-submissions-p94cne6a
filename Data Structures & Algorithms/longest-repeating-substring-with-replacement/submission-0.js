class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let maxLen = 0
        let left = 0
        let freqCount =  new Array(26).fill(0) // not sure if this has to be arr or set
        

       for(let right = 0; right < s.length; right++) {
            freqCount[s.charCodeAt(right) - 65] +=1
            while((right - left + 1) -  Math.max(...freqCount) > k){
                freqCount[s.charCodeAt(left ) - 65] -= 1
                left++
            }
            maxLen = Math.max((right - left + 1), maxLen)
       }
       return maxLen
    }

    /*
     * sliding window
     * take the L ptr and have R be f loop
     * 
     */
}
