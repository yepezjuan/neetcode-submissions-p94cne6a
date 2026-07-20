class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
      let maxLCS = 0
      let currLCS = 0
      let numSet = new Set(nums)

      for(let num of numSet){
        if(!numSet.has(num -1)){
          let i = 0
          currLCS = 0

          while(numSet.has(num + i)) {
            currLCS++
            i++
            }
        }

        maxLCS = Math.max(currLCS, maxLCS)
      }

      return maxLCS
    }
}
