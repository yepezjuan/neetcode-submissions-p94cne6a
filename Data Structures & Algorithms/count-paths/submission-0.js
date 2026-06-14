class Solution {
    /**
     * @param {number} m
     * @param {number} n
     * @return {number}
     */
    uniquePaths(m, n) {

        
        /**
         * params: m -> number of rows, n -> number of cols
         * return: int num of unique ways of reaching bottom right
         * example: idk how they got 21
         * pseudo: need to make a ds for keeping track of moves
         *          begin first step from endpoint and work way up
         *          (using bottom-up approach)
         *          need helper function to make sure we're in bounds of grid
         * 
         */
        let stepMap = Array.from({length: m + 1}, () => Array(n+1).fill(0))
        stepMap[m-1][n-1] = 1

        for(let i  = m -1; i >= 0; i--){
            for(let j = n - 1; j >= 0;j--) {
                stepMap[i][j] += stepMap[i+1][j] + stepMap[i][j+1]
            }
        }
        return stepMap[0][0]
    }
}
