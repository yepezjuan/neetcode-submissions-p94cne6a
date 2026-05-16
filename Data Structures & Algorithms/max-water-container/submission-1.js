class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let right = heights.length - 1
        let left = 0
        let max = 0

        while(left < right){
            let height = Math.min(heights[left],heights[right])
            let curArea = height * (right - left)
            max = Math.max(max, curArea)

            if(heights[left] > heights[right]) right--
            else left++
        }

        return max
    }
}
