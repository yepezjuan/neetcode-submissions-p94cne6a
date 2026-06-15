class Solution {
    /**
     * @param {number} m
     * @param {number} n
     * @return {number}
     */
    uniquePaths(m, n) {
        // 2D dynamic programming is same as 1D except it adds extra layer of input data
        /**
         * params: size of grid: m rows , n col
         * return: int num of unique ways to get to trophy
         * example: player can only move right or down
         * pseudo: using bottom-up approach
         */

        //need a grid size m+1, n+1 so we dont go out of bound
        //while building bottom-up answer
        let grid = Array.from({length:m + 1}, ()=> Array(n+1).fill(0))
        //FORGOT: to mark bottom right as end goal
        grid[m -1][n -1] = 1
        

        //loop through 2d array to populate grid:
        for(let i = m - 1; i >=0; i--){
            for(let j = n - 1; j >= 0; j--){
                grid[i][j] += grid[i + 1][j] + grid[i][j + 1]
                //no need for conditionals since we have grid m+1 , n+1
            }
        }
        return grid[0][0]
    }
}
