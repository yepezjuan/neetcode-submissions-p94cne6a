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
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {TreeNode}
     */
    lowestCommonAncestor(root, p, q) {


        // keeping track of current root
        let curr = root
        // call helper function on curr node
        console.log(p)

        while(curr) {
        // check root.left tree for LCA, recursively call fn :
        if (p.val > curr.val && q.val > curr.val){
            curr = curr.right
        }

         // check root.right tree for LCA, recursively call fn :
        else if(p.val < curr.val && q.val < curr.val){
            curr = curr.left
        }

        else {
            return curr
        }
       
        }
        
    }

    // helper function to do stuff recursively

        // check if curr root <= p  && currRoot > q || currRoot <= q && currRoot > p
        // answer found , return currRoot
}
