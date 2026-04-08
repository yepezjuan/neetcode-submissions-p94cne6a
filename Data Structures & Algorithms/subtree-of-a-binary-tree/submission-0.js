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
    isSubtree(root, subRoot) {

        // step 1 check for non empty root, helps w recursion
        if(!root) return false
        
        // step 2 check for same tree
        if(this.isSameTree(root, subRoot)) return true

        

        // step 3 if not same tree check its children
        return this.isSubtree(root.left, subRoot) 
            || this.isSubtree(root.right, subRoot)

    }

    isSameTree(p, q) {

        // option 1: values dont equal or p is null or q is null

        //option 2: theyre both null

        // option 3: they are equal
        if(!p && !q) return true

        if(!p  || !q || p.val != q.val) return false

        return this.isSameTree(p.left,q.left) && this.isSameTree(p.right,q.right)
    }
}
