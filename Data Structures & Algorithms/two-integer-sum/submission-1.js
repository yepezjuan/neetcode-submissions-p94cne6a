class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {


        /**
         * params: int nums, int target
         * return index [i,j] nums[i] + nums[j] = target
         */

        let numMap = new Map()
        let output = []

        nums.forEach((value, index) => {
            let comp = target - value

            if(numMap.has(comp)){
                if(index < numMap[comp]){
                    output = [index, numMap.get(compe)]
                }

                output = [numMap.get(comp),index]
            }
            numMap.set(value,index)
            })

        
        return output
    }
}
