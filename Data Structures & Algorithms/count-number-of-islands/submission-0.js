class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid) {
        /**
         * params: arr of arrays (grid)
         * return: int num islands (need a counter)
         * examples: no diagonal island pieces
         * pseudo: 
         *      want to keep global counter
         *      will need a helper dfs fn
         *      2D Loop for the arrs
         * 
         *      
         */
        let rows = grid.length
        let cols = grid[0].length
        //let neighbors = [[0,1],[0,-1], [1,0], [-1,0]]
        let islandCount = 0
        // this helps check of cell is 1 / 0
        // should it be returning a size
        function dfs(r,c){
            if( r < 0 || r >= rows || c < 0 || c >= cols || grid[r][c] != "1")  return
            else{
                grid[r][c] = "0"
                dfs(r+1,c)  
                dfs(r-1,c)
                dfs(r,c+1) 
                dfs(r,c-1)
            }
        }

        for(let r = 0; r < rows; r++){
            for(let c = 0; c < cols; c++){
                if(grid[r][c] == "1"){
                    islandCount++
                    dfs(r,c)
                    
                }
            }
        }

        return islandCount 
    }
}
