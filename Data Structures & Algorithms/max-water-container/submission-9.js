class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        /**
         * params: int array heights: no neg numbers
         * returns: MAX water storage
         * examples: no neg numbers, cannot change order of values (no sorting)
         * pseudo: must have a L and R pointers
         *          keep track of current water and max water
         *          return maxwater only
         *          if curr < max L++ 
         *          else R-- NOT REALLY SURE Y JUST REMEMBER SOLUTION SAYING SO
         *          
         */

        let left = 0
        let right = heights.length - 1
        let maxWater = 0

        while(left < right){
            let width = right - left
            let currWater = width * Math.min(heights[left], heights[right])
        
            if(heights[left] < heights[right]) left++
            else right--
            maxWater = Math.max(currWater, maxWater)
        }
        return maxWater
    }
}
