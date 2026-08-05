class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        /**
         * params: int array nums, int target
         * returns: index of the found target, otherwise return -1
         * examples: values are rotated n times
         * psuedo: the problem has two main states , then branches off 
         *          into other 2 sub branches
         *          check if mid is < right
         */
        let left = 0
        let right = nums.length - 1
        //have to use = sign bc it can be the same val
        while (left <= right){

            let mid = Math.floor((left + right) / 2)
            if(nums[mid] == target) return mid

            if(nums[mid]< nums[right]){
                if(target > nums[mid] && target <= nums[right]) left = mid + 1
                else right = mid - 1
            }

            else{
                if(target >= nums[left] && nums[mid] > target) right = mid - 1
                else left = mid + 1
            }

        }
        return -1
    }
}
