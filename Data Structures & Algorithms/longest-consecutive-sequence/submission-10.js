class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
      /**
       * 
       * i think this is a pointer problem
       * - have our windowSet and our acual set of numbers
       */

      let currSeq = 0
      let maxSeq = 0
      let numsSet = new Set(nums) 

      for(let num of numsSet){
        let i = 0
        if(!numsSet.has(num - 1)){
          currSeq = 0
          while(numsSet.has(num + i)){
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
