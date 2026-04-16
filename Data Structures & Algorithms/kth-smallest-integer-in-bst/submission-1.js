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
     * @param {number} k
     * @return {number}
     */
    // parameters: always will be given BST, and a k
    kthSmallest(root, k) {
        this.result = 0
        this.step = 0
        this.k = k

        this.inOrder(root)

        return this.result
    }

    inOrder(node){
        //reached the bottom of tree
        if(!node) return


        this.inOrder(node.left)

        // then check for currNode

        this.step++
        if(this.step == this.k){
            this.result = node.val
            return
        }


        this.inOrder(node.right)
    }
}
