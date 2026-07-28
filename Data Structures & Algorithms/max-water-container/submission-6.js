class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let left = 0
        let right = heights.length - 1
        let max = 0
        

        while(left < right) {
            let width = right - left
            let curr = width * Math.min(heights[left], heights[right])
            max = Math.max(curr,max)
            if(heights[left]< heights[right]) left++
            else right--

            
        }
        return max
    }

    /**
     * params: int array of heights
     * returns: max area
     * examples: water cannot spill out of container, only keeping track of max water
     * pseudo: make left and right ptrs . 
     */
}
