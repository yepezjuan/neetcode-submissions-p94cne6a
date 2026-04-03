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
     * @return {number}
     */
    maxDepth(root) {
        //
        if (root == null) return 0

        let leftHeight = this.maxDepth(root.left)
        let rightHeight = this.maxDepth(root.right)

        return 1 + Math.max(leftHeight, rightHeight)

        //simplest output is none
        /**
         * check left , check right
         * then recurse left -> right
         *  might need helper fn
         * need to keep track w global depth var
         */
    }
}
