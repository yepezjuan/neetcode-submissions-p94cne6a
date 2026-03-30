class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        //need make a map
        let numsMap = new Map()
        let output = []

        nums.forEach((num,index) => {
            let comp = target - num

            if (numsMap.has(comp)){
                if (index < numsMap[comp]){
                    output = [index,numsMap.get(comp)]
                }
                
                    output = [numsMap.get(comp),index]
                
            }

            numsMap.set(num,index)
     } )
     return output
    }
}
