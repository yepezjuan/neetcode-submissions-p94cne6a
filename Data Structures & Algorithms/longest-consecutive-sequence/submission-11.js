class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {

      let curSeq = 0
      let maxSeq = 0
      let numSet = new Set(nums)

      for(let num of numSet){
        let i = 0
        if(!numSet.has(num - 1)){
          curSeq = 0
          while(numSet.has(num + i)){
            curSeq++
            i++
          }
        }

        maxSeq = Math.max(curSeq, maxSeq)
      }
      return maxSeq
    }
}
