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
     * @return {TreeNode}
     */
    invertTree(root) {

        if(!root) return null

        let temp = root.left
        root.left = root.right
        root.right = temp

        this.invertTree(root.left)
        this.invertTree(root.right)


        return root

        // params: given a tree root 
        // returns a tree root
        // examples: need to swap all node 
        // pseuodo: recursive fn, need a base case and conditionals
        /**
         * need to have a temp node??
         */
    }
}
