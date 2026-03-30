class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {

        let frqMap = new Map()
        
        nums.forEach(num => {
            if (frqMap.has(num)){
                frqMap.set(num, frqMap.get(num) +1)
            }
            else {
                frqMap.set(num, 1)
            }
        })

        let output = Array.from(frqMap.entries()).sort((a,b) => b[1]- a[1])
        return output.slice(0,k).map(pair => pair[0])
        
    }
}
