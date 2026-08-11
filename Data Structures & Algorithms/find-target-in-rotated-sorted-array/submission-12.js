class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {

        /**
         * params: an int arr nums, and int val target
         * returns: index of found target val or -1 if not found
         * examples: all arrs were originally in order
         * pseudo: want to make sure im looking through section closest to 
         *          target value that is given
         *          then have to calculate mid val
         *          check if its within left or right
         *          then check if its in range else make change 
         */

        let left = 0
        let right = nums.length - 1

        while(left <= right){
            let mid = Math.floor((left + right ) / 2)

            if(nums[mid] == target) return mid


            if(nums[mid] < nums[right]){
                if(target > nums[mid] && target <= nums[right]) left = mid + 1
                else right = mid - 1
            }

            else { // moving to the left

                if(target < nums[mid] && target >= nums[left]) right = mid - 1
                else left = mid + 1
            }
        }
        return -1
    }
}
