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
        /**
         * params: root node pointer
         * return: new root node pointer
         * examples: its an exact mirror invertion
         * pseudo: set up  curr node, then check for children
         */
        // not sure if i need to make a helper function.
        
        if(root == null) return null
        
        let temp = root.left
        root.left = root.right
        root.right = temp

        this.invertTree(root.left)
        this.invertTree(root.right)


        return root
    }
}
