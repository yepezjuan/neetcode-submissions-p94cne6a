class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
      /**
       * params: unordered array of nums
       * return: int leng of maxLCS
       * example: containts dupes and not in order 
       * pseudo: look code down below
       */


      let sortedNums = new Set(nums)
      console.log(nums)

      let currLCS = 0
      let maxLCS = 0

      for (let num of nums){
        if(!sortedNums.has(num - 1)){
          let i = 0
          while(sortedNums.has(num +i)){
            i+=1
            currLCS +=1
          }
        }

        if(currLCS > maxLCS) maxLCS = currLCS
        currLCS = 0
      }
      return maxLCS
    }
}
