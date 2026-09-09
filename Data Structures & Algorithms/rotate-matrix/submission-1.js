class Solution {
    /**
     * @param {number[][]} matrix
     * @return {void}
     */
    rotate(matrix) {
        /**
         * params: a matrix and need to rotate by 90º
         * return: nothing no return
         * examples: n x n, all same sides no need to change
         * pseudo:
         */
        let left = 0
        let right = matrix.length - 1

        while(left < right){
            
            for(let i = 0; i < right - left; i++){
                let top  = left
                let bottom = right
                    // the [i] tells us which char to change to
                    // rmembered i had to store topleft
                let topLeft = matrix[top][left + i]

                matrix[top][left + i] = matrix[bottom - i][left] 

                matrix[bottom -i][left] = matrix[bottom][right - i] 

                matrix[bottom][right - i] = matrix[top + i][right]
                
                matrix[top + i][right] = topLeft
            
                }
            left++
            right--
        }

       
        // no return
    }
}
