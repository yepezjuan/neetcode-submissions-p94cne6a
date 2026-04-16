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
    kthSmallest(root, k) {

        // dont need to validate bc told its a BST
        // brute solution is add all nodes to an arr 
        // sort the arr
        // then return the min
        this.count = 0
        this.result = 0
        this.k = k
        
        this.inOrder(root)
        return this.result

    }

    inOrder(node) {
        // this checks where tree ends
        if(!node) return
        this.inOrder(node.left)

        this.count++
        if(this.count == this.k){
            this.result = node.val
            return;
        }

        this.inOrder(node.right)
    }

}
