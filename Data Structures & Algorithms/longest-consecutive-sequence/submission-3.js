class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
      /**
       * params: int arr nums
       * return: int # of consecutive sequence
       * examples: nums not in order, will not be sorting
       *          - no sorting!!! need O(n)
       * pseudo: check if val before it exists
       */

      let maxi = 0
      let numSet = new Set(nums) //use set instead of map
      let lCS = 0
      
      

      for(let num of numSet){
        if(!numSet.has(num -1)){
          let i = 0
          while(numSet.has(num + i)){
              lCS++
              i++
          }

        }
        if(maxi< lCS){
          maxi = lCS
        }
        lCS = 0
      }

      return maxi
    }
}
