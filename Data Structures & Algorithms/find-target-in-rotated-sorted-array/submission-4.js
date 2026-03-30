class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        /**
         * psuedo:
         * want to use left n right pts
         * while l <= r
         * base case: best case mid == target
         * 
         * check if left side is sorted
         *      then check if target is within left side bounds
         *      otherwise switch to right side
         * 
         * else itll be on right side
         * 
         *      check if target is within right side bounds
         *      
         */

        let left = 0
        let right = nums.length - 1

        while(left <= right){
            let mid = Math.floor((right + left)/ 2)
            if(nums[mid]  == target){
                return mid
            }

            if(nums[right]> nums[mid]){

                    
                    if(target <= nums[right] && target > nums[mid] ){
                        left = mid + 1
                    }
                    else{
                        right = mid - 1
                    }
            }
            else {

                if(target >= nums[left] && target < nums[mid]){
                    right = mid - 1
                
                }
                else{
                    left = mid + 1
                }

            }

        }
        return -1
    }
}
