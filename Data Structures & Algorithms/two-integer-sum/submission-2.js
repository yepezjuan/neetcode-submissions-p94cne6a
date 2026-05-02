class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let dict = new Map()

        for(let i = 0; i < nums.length; i++){
            if (dict.has(target - nums[i])){
                if(i < dict.get(target - nums[i])){
                    return [i, dict.get(target - nums[i])]
                }
                return [dict.get(target - nums[i]), i]
            }
            else{
                dict.set(nums[i],i)
            }
        }
    }
}
