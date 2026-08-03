class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        
        /**
         * has to be a binary solution need O(log n) runtime
         * params: array nums (unique values, no dupes, are sorted before the rotations)
         * returns: smallest value of the array
         * examples: does not have to begin w 1, values vcan be -/+
         * pseudo: need to keep track of L R, maybe middle value, currMin
         *          use a while loop while L < R, all code happens here
         *          if R < L -> left = middle
         *          else R = middle currMin = Left 
         *          return currMin
         */
        let left = 0
        let right = nums.length - 1
        

        while (left < right){
            let mid = Math.floor((right + left ) / 2)
            console.log(mid)
            if( nums[mid] > nums[right]){
                left = mid + 1
            }
            else right = mid // the right most value is going to be our answer
            
        }

        return nums[right]
    }   


}
