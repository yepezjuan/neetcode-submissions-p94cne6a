class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let left = 0
        let right = heights.length - 1
        let maxWater = 0

        while(left < right){
            let currH = Math.min(heights[left], heights[right])
            
            let currWater = currH * (right - left)
            
            if(heights[left] < heights[right]) left++
            else right--
            maxWater = Math.max(currWater,maxWater)

        }
        return maxWater
    }
}
