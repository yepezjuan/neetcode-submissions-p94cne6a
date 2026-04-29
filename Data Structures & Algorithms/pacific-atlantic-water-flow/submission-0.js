class Solution {
    /**
     * @param {number[][]} heights
     * @return {number[][]}
     */
    pacificAtlantic(heights) {

        let m = heights.length
        let n = heights[0].length

        let pQue = []
        let aQue = []

        const pSeen = Array.from({ length: m }, () => Array(n).fill(false));
        const aSeen = Array.from({ length: m }, () => Array(n).fill(false));
        

        

        for(let i = 0; i < m; i++){
            pQue.push([i,0])
            pSeen[i][0] = true

            aQue.push([i, n-1])
            aSeen[i][n-1] = true
        }

        for(let j = 0; j < n; j++){
            if(!pSeen[0][j]){
                pQue.push([0, j]);
                pSeen[0][j] = true;
            }

            // Check the bottom row for the Atlantic queue
            if(!aSeen[m-1][j]){ 
                aQue.push([m-1, j]);
                aSeen[m-1][j] = true;
            }
        }

        const bfs = (que, seen) => {
            const directions = [[0, 1], [1, 0], [0, -1], [-1, 0]];
            let head = 0;

            while(head < que.length) {
                const[r,c] = que[head++]

                for (const [dr, dc] of directions) {
                const nr = r + dr;
                const nc = c + dc;
                
                    // Check bounds, if visited, and if water can flow "up" to the new cell
                    if (nr >= 0 && nr < m && nc >= 0 && nc < n && 
                        !seen[nr][nc] && heights[nr][nc] >= heights[r][c]) {
                        seen[nr][nc] = true;
                        que.push([nr, nc]);
                    }
                }
            }
        }

        bfs(pQue,pSeen);
        bfs(aQue,aSeen);


        const result = [];
        for (let i = 0; i < m; i++) {
            for (let j = 0; j < n; j++) {
                if (pSeen[i][j] && aSeen[i][j]) {
                    result.push([i, j]);
                }
            }
        }
        
        return result;


        /**
         * params: grid with val height
         * return: arr of [x,y] that can reach both oceans
         * examples: does it neet to be tracked if it can reach P and A ?
         * psuedo: 
         */
    }
}
