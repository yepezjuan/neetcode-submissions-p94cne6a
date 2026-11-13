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

        if (!subRoot) return true;   // an empty tree is always a subtree
        if (!root) return false;     // we ran out of nodes and found no match
        
        if(this.isSametree(root, subRoot)) return true

        
        // essentially looking for 1 single fasle in the maps
        return this.isSubtree(root.left, subRoot) || this.isSubtree(root.right, subRoot)

    }

    isSametree(r,s) {
        if(!r && !s) return true

        else if(!r || !s || r.val != s.val) return false
        return this.isSametree(r.left, s.left) && this.isSametree(r.right, s.right)

    }

}
