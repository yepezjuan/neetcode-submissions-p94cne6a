class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        //this version can be SORTED
        nums = nums.sort((a,b) => a-b)
        let output = []
        for(let i =0; i < nums.length; i++){
            let left = i + 1
            let right = nums.length - 1

            if(i > 0 && nums[i] == nums[i-1]){
                continue
            }

            //need to make sure i is not a DUPE!
            while(left < right){
                let sum = nums[i] + nums[left] + nums[right]
               
                if (sum == 0){
                    output.push([nums[i], nums[left], nums[right]])
                    while (nums[left] == nums[left +1]) left++
                    while(nums[right] == nums[right -1]) right-- 
                    left++
                    right--
                }

                else if(sum < 0){
                    left++
                }
                
                else{
                    right--
                }
                
            }
        }
        return output
    }
}
