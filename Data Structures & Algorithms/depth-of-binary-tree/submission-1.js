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
        /*
         * params: root node
         * return: max depth value
         * examples: compares depth of left and right children 
         *           send up the depth each mini tree
         * pseudo: goint to keep a counter var in function or is this going to be recursive
         */
        if(root == null) return 0

       let leftH = this.maxDepth(root.left)
       let rightH = this.maxDepth(root.right)


       

        return 1 + Math.max(leftH, rightH)
    }
}
