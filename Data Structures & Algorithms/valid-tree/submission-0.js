class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {boolean}
     */
    validTree(n, edges) {

        if(edges.length > n - 1) return false

        const graph = Array.from({length: n}, () => [])

        for(const [x,y] of edges){
            graph[x].push(y)
            graph[y].push(x)
        }

        const visited = new Set()
        function dfs(node,parent) {
            if(visited.has(node)) return false

            visited.add(node)
            for(const neighbor of graph[node]){
                if(neighbor == parent){
                    continue
                    // this is if i run into the curr node
                }

                if(!dfs(neighbor,node)) return false
            }
            return true
        }


        

        return dfs(0,-1) && visited.size == n
    }
}
