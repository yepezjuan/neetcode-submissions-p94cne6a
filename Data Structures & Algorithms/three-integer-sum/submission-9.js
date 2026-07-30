class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        /**
         * params: int array nums
         * return: arr of int arrays that add up to 0 
         * examples: has negatives and duplicate values, nums has at least 3 values
         * pseudo: 
         * 
         *          can begin by sorting all the values
         *          have a for loop running 1x with a while loop inside
         *          while loop changes while there is dupes involved
         *          push to output when a valid 3 piece is found
         */
        let output = []
        nums = nums.sort((a,b) => a - b)

        for(let i = 0; i < nums.length; i++){
            let left = i + 1
            let right = nums.length - 1

            if(i > 0 && nums[i] == nums[i - 1]) continue

            while(left < right){
                let currSum = nums[i] + nums[left] + nums[right]
                if( currSum == 0){
                    output.push([nums[i], nums[left], nums[right]])
                    while(nums[left] == nums[left + 1]) left++
                    while(nums[right] == nums[right - 1]) right--
                    left++
                    right--
                    
                }
                else if(currSum > 0) right--
                else left++
                
            }
        }
        return output
    }
}
