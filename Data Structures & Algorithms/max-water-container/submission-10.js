class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let left = 0
        let right = heights.length - 1
        let maxArea = 0


        while(left < right){
            
            let currHeight = Math.min(heights[left], heights[right])
            let currArea = currHeight * (right - left)

            if(heights[right] > heights[left]) left++
            else right--

            maxArea = Math.max(maxArea, currArea)
        }
        return maxArea
    }
}
