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
     * @param {TreeNode} subRoot
     * @return {boolean}
     */

    // this 
    isSubtree(root, subRoot) {


        if(!subRoot) return true //an empty tree is always a subtree

        if(!root ) return false // we ran out of nodes and found no match

        if(this.isSameTree(root,subRoot)) return true // check for current root to subRoot

        return this.isSubtree(root.left, subRoot) || this.isSubtree(root.right, subRoot)

        // ^^ checking if the left node or right node is the subTree



    }

    isSameTree(r,s) {
        if(!r && !s) return true
        else if(!r || !s || r.val != s.val) return false
        // both chcks
        return this.isSameTree( r.left, s.left) && this.isSameTree(r.right, s.right)
    }


    //this is doing a depth first search
}
