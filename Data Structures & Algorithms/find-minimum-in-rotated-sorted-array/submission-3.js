class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        let left = 0
        let right = nums.length - 1
        while(left < right){
            let mid = Math.floor((left + right) / 2) 
            // if the middle val is larger than right val
            // then arr rotated at some point past the middle val
            if(nums[mid] > nums[right]){
                left = mid + 1
            }
            // otherwise it can be from index 0 -> mid value
            else {
                right = mid
            }
        }
        return nums[right]
    }
}
