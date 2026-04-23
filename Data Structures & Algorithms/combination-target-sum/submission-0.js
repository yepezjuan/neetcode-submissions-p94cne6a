class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums, target) {
        const output = []
        // have it set to const so no re assigning

        function dfs(index,current, total){
            if(total == target){
                output.push([...current])
                return;
            }

            if(total > target || index >= nums.length) return;


            current.push(nums[index])
            dfs(index,current, total + nums[index])
            current.pop()

            dfs(index + 1, current, total)
        }

        //need to loop through each num and 
        // and check if we can add up using num itself
        // how to check if we move on to adding next value

        dfs(0,[],0)
        return output


    }

    /*
     * since order doesnt matter, we may use sort()
     * 
     * params: num arr, int target
     * return: arr of arrays
     * examples: run through examples
     * pseudo: 
     * 
     */
}
