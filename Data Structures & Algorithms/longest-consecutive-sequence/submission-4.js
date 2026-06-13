class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        //maybe hasing n: n-1??

        /**
         * params: array nums
         * return: int num of consec numbers in nums
         * example: values do not have to be sequential in nums
         * pseudo: cannot sort values, has to be O(n)
         *          - thinking of running through nums
         *          - checking if we have nums[i] - 1 in map:
         *          - yes? then we increment output and add nums[i] to map
         *          - no? maybe we just add to map
         *          - maybe there should be some sort of stack to keep track of whats been checked?
         */
        let currentLCS = 0
        let maxLCS = 0
        let freqSet = new Set(nums) // can auto add nums in set form

        for(let num of freqSet){
            if(!freqSet.has(num - 1)){
                let i = 0
                while(freqSet.has(num + i)){
                    currentLCS++
                    i++
                }
            }
            if(currentLCS > maxLCS) maxLCS = currentLCS
            currentLCS = 0
        }
        return maxLCS
    }
}
