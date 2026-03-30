class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {

        //there are no ties
        // 1. make a freq_map (key,qty) [ DONE ]
        // 2. then make output len of nums each index rep. qty and values are nums
        //  w. that qty

        // but since its js we turn map entries into arr and sort it by [1]
        //we loop through values and pop off k values


        let freqMap = new Map()

        for(let num of nums){
            if(freqMap.get(num)){
                freqMap.set(num, freqMap.get(num)+1)
            }
            else{
                freqMap.set(num, 1)
            }
        }

        let sortedVals = Array.from(freqMap.entries()).sort((a,b) => a[1]- b[1])
        return sortedVals.slice(sortedVals.length -k).map(pair => pair[0])
    }
}
