class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
      // array and hashing problem
      let currLCS = 0
      let maxLCS = 0
      let numSet = new Set(nums)

      // starting point for a new sequence is if n-1 does NOT exist

      for(let num of numSet){
        let i = 0
        if(!numSet.has(num -1)){
          currLCS = 0
          while(numSet.has(num + i)){
            currLCS+=1
            i+=1
          }

        maxLCS = Math.max(currLCS, maxLCS)
        currLCS = 0
        }
      }
      return maxLCS
    }
}
