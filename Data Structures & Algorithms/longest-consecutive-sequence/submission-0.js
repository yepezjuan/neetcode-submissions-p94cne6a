class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        // how do i one pass nums and get the order of the vals
        // find the lowest val  CANNOT SORT 
        // use left and right pointers NAH
        // need to have a ds for the diff lists


        let numSet = new Set(nums) //turning nums into a set
        console.table(numSet)
        let lCS = 0
        let output = 0

        for(let num of numSet){
          if (numSet.has(num -1)) {
            continue
          }
          else{
            let i = 0
            while(numSet.has(num + i)){
                lCS++
                i++
            }
            if (output < lCS){
                output = lCS
            }
            lCS = 0
          }
        }
        return output
    }
}
