class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {number}
     */
    countComponents(n, edges) {
        /**
         * params: list n of nodes, arr[ [a,b] ,...]
         * returns: int num of connected comp
         * examples: 
         */
        const adj = Array.from({length: n}, () => [])
        const visit = Array(n).fill(false);

        // building out the adjacency nodes
        for(const [a,b] of edges){
            adj[a].push(b)
            adj[b].push(a)
        }

        function dfs(node){
            for(const neigh of adj[node]){
                if(!visit[neigh]){
                    visit[neigh] = true
                    dfs(neigh)
                }
            }
        }


        let components = 0
        for(let i = 0; i < n; i++){
            if(!visit[i]){
                visit[i] = true
                dfs(i)
                components++
            }
        }
        return components
    }
}
