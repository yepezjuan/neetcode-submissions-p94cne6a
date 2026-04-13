/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {number[][]}
     */
    levelOrder(root) {

        /**
         * no will need to make a queue
         * 
         * Parameters : TreeNode
         * Re
         */

        if(!root) return []

        const result = []
        let queue = [root]

        while(queue.length > 0){
            const n = queue.length
            const currLevelVals = [];

            for(let i = 0; i < n ;i++){
                // grab next node from queue 
                const currNode = queue.shift()
                // begin adding its values
                currLevelVals.push(currNode.val)

                if(currNode.left) queue.push(currNode.left)
                if(currNode.right) queue.push(currNode.right)

            }
            result.push(currLevelVals)
        }
        return result
    }

    BFS(root) {
        /** do i need some sort of quueue for this helper fn */

    }
}
