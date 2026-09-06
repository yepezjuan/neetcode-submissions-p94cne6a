class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
      let numSet = new Set(nums)

      let currSeq = 0
      let maxSeq = 0
      
      for(let num of numSet){
        let i = 0
        if(!numSet.has(num -1)){
          while(numSet.has(num + i)){
            currSeq++
            i++
          }
        }
        maxSeq = Math.max(currSeq, maxSeq)
        currSeq = 0
      }
      return maxSeq
    }
}
