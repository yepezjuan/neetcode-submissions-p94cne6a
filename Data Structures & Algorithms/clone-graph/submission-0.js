/**
 * // Definition for a Node.
 * class Node {
 *     constructor(val = 0, neighbors = []) {
 *       this.val = val;
 *       this.neighbors = neighbors;
 *     }
 * }
 */

class Solution {
    /**
     * @param {Node} node
     * @return {Node}
     */
    cloneGraph(node) {
        /**
         * params: arr of arrs
         * return: arr of arrs
         */

        if(!node) return null

        let myMap = new Map()

        function dfs(node){
            if(myMap.has(node)) return myMap.get(node)

            let copyNode = new Node(node.val)
            myMap.set(node,copyNode)

            for(let n of node.neighbors){
                copyNode.neighbors.push(dfs(n))
            }
            return copyNode

        }

        return dfs(node)
        
    }
}
