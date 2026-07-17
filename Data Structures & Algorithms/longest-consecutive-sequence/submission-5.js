class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
      /**
       * params: arr of ints [nums]
       * return: int length of max CS
       * examples: they arent consecutive in orig. array
       * 
       *           there is duplicates in exs.
       * 
       * pseudo:
       *    - can only run on 1d loops
       *    - need to keep track of starting index !!
       *    - while n not nums.length
       *    - run each number and check if it can be added
       *    - use a set for ds so no duplicates are added
       *    - then we just return length of the set
       *    - VALID START PT: if n -1 DOES NOT EXIST IN SET()
       * 
       * 
       * notes: 
       *    - its better to use a for loop
       *    - 
       */

      let setLCS = new Set(nums) // turn nums into a set
      let currLCS = 0
      let maxLCS = 0
      
      

      //LOOP WILL ONLY RUN 1X
      for(let num of setLCS){
        if(!setLCS.has(num -1)){ // our indicator for it being a starting point
          let i = 0
          while(setLCS.has(num + i)){
              currLCS+= 1
              i+=1
          }
        }
        if(currLCS > maxLCS) maxLCS = currLCS
        currLCS = 0
      }
      
    return maxLCS

    }
}
