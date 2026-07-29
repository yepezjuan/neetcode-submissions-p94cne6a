class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        /**
         * params: an int array nums[] may containt duplicates
         * return: array of arrays who add up to 0
         * examples: contain duplicate values and negative values
         * pseudo: i != j != k 
         *          begin by sorting the values, sint order does not matter
         *          only care about the values
         * 
         *          we run the loop for each value but for each i we give it a L and R
         *          from there we check if i == L or i == R
         *          increment L or R based off currSum
         *          once exiting while loop push response into output
         *          repeat for all num of nums
         */

        let output = []
        nums = nums.sort((a, b) => a - b)
        for(let i = 0; i < nums.length; i++){
            let left = i + 1
            let right = nums.length - 1
            if(i > 0 && nums[i] == nums[i-1]){
                continue
            }

            while(left < right){

                // need to add a check for dupes? remeber there being while loops inside while loop

                // each combo is either 0, greater than 0 or less than 0
                let currSum = nums[i] + nums[left] + nums[right]
                if(currSum == 0){ 
                    output.push([nums[i], nums[left],nums[right]])
                    while (nums[left] == nums[left +1]) left++
                    while(nums[right] == nums[right -1]) right-- 
                    left++
                    right--
                    }
                else if (currSum > 0) right--
                else left++
            }
        }
        return output
    }
}
