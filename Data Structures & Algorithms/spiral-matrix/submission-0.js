class Solution {
    /**
     * @param {number[][]} matrix
     * @return {number[]}
     */
    spiralOrder(matrix) {
        /**
        params: an num map (matrix)
        return: an array of the spiral
        examples, m and n can be diff values, still squares
        pseudo: keep track of ranges loop through top bottom left right

        */
        let left = 0
        let right = matrix[0].length
        let top = 0
        let bottom = matrix.length
        let output = []

        while(left < right && top < bottom){
            for(let i = left; i < right; i++){
                output.push(matrix[top][i])
            }
            top++
            for(let i = top; i < bottom; i++){
                output.push(matrix[i][right - 1])
            }
            right--

            if(!(left < right && top < bottom)) break

            for(let i = right - 1; i > left - 1; i--){
                output.push(matrix[bottom - 1][i])
            }
            bottom--

            for(let i = bottom - 1; i >= top; i--){
                output.push(matrix[i][left])
            }
            left++

        }
        return output
    }
}
