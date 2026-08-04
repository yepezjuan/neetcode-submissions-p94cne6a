class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        // need to have a binary algo runtime
        /**
         * params: int array nums and target value
         * return: index of target value or -1 if not found
         * examples: numbers were sorted in ascending order, but were rotated 
         * pseudo: so we know how to find the min value
         *          how does help w this problem?
         */

        let left = 0
        let right = nums.length - 1

        while(left <= right){
            let mid = Math.floor((left + right) / 2)
            if(nums[mid] == target) return mid
            //these outer loops are from min in rotated sorted array
            // if right side bigger its still ascending on the right
            if(nums[right] > nums[mid]){
                if(target <= nums[right] && target > nums[mid]) left = mid + 1
                else right = mid - 1
            }

            //otherwise its been rotated on the right
            else {
                if(target >= nums[left] && target < nums[mid]){
                    right = mid - 1
                
                }
                else{
                    left = mid + 1
                }
            }
            
        }

        // completely forgot i had to return -1 if i couldnt find the target
        return -1
    }
}
