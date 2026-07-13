class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
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
