class Solution {
    /**
     * @param {character[][]} board
     * @param {string} word
     * @return {boolean}
     */
    exist(board, word) {
        let cols = board[0].length
        let rows = board.length
        const visited = new Set()
        /**
         * params: arr or string arrs
         * return: bool
         * examples: can go multidirection, no duplicates cell use
         * psuedo: 
         * 
         * need dfs helper
         * what breaks recursion -- out bounds or found word 
         */

        function dfs(r,c,i){

            //what breaks recursion
            if(i == word.length) return true

            if(c < 0 || c >= cols) return false
            if(r < 0 || r >= rows) return false
            if(visited.has(`${r}, ${c}`)) return false
            if(board[r][c] !== word[i]) return false

            visited.add(`${r}, ${c}`);

            const found = 
                dfs(r + 1, c, i + 1) ||
                dfs(r - 1, c, i + 1) ||
                dfs(r, c + 1, i + 1) ||
                dfs(r, c - 1, i + 1) ;

            visited.delete(`${r}, ${c}`);

            return found
        }

        for(let i = 0; i < rows; i++){
            for(let j = 0; j < cols; j++){
                if(dfs(i,j,0)) return true
            }
        }
        return false;
    }
}
