class Solution {
    /**
     * @param {number[][]} matrix
     * @return {void}
     */
    rotate(matrix) {
        /**
         * cannot add another matrix, tight on space
         * params: matrix arr[][]
         * return: nothing working in place
         * examples: matrix n x n
         * pseudo: code below
         */

        let left = 0
        let right = matrix.length - 1


        while(left < right){
            for(let i = 0; i < right - left; i++){
                let top = left
                let bottom = right

                let topLeft = matrix[top][left + i]

                matrix[top][left + i] = matrix[bottom - i][left]

                matrix[bottom - i][left] = matrix[bottom][right - i]

                matrix[bottom][right - i] = matrix[top + i][right]

                matrix[top + i][right] = topLeft

                
            }
            left++
            right--
        }


    }
}
