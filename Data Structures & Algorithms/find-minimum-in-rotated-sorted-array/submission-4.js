class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        // need a binary search algo O(logn)

        /**
         * params: int array nums
         * return: smalled val in nums
         * examples: can have - and + && up to 1000 values
         * psuedo:  either on left or on right no other choice
         *          answ should end up being = right ptr
         *          if[mid] < nums[right]: answ is on left side
         *          else [mid] > nums[right] : answ is on right side
         */

        let left = 0
        let right = nums.length - 1

        while(left < right){
            let mid = Math.floor((left + right) / 2)
            if(nums[mid] > nums[right]) left = mid + 1
            else right = mid
        }
        return nums[right]
    }
}
