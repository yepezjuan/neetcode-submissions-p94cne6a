class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        /**
         * params: array of nums, k -> amount of nums
         * return: the values which are most frequent
         * examples: k = 2 give top 2 most frequent values
         *          NOT thier frequency
         * pseudo: first need to map the frequencies
         * 
         * then make an arr buckets to sort by frequency
         * then return the values from that array
         */


        // building out a regular freq map

        let freqMap = new Map()

        for(let num of nums){
            if(!freqMap.has(num)) freqMap.set(num,1)
            else freqMap.set(num, freqMap.get(num)+1)
        }



        // building out the sorted frequencies

        

        let buckets = Array.from(freqMap.entries()).sort((a,b) => a[1] - b[1]) // since max freq is len of nums


        return buckets.slice(buckets.length - k).map(bucket => bucket[0])
    }
}
