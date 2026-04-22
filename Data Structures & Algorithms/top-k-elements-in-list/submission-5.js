class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        /*
         * params: nums array  and int k (amount of return vals)
         * return: array
         * examples: check back what to put here
         * pseudo: want to make a freq Map
         */


        let freqMap = new Map()

        for(let num of nums) {
            if(freqMap.get(num)) freqMap.set( num, freqMap.get(num) + 1)
            else freqMap.set(num,1)
        }

        //then have to make an array of their values
        let pairs = Array.from(freqMap.entries()).sort((a,b)=> a[1] - b[1]) 
        // since it doesnt have end index it goes until end 
        return pairs.slice(pairs.length - k).map(pair => pair[0])
    }
}
