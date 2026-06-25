class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        
        let max_cont = 0
        let left = 0
        let right = heights.length - 1

        while(left < right) {
            let curr_cont = (right - left) * Math.min(heights[left], heights[right])
            // immediately check for requested answer
            max_cont = Math.max(curr_cont, max_cont)

            // only moving pointer when we have something bigger 
            if(heights[right] < heights[left]) right--
            // samething but opposite direction
            else left++
        }

        return max_cont
    }
}
