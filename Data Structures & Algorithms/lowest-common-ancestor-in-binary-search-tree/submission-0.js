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
        /**
         * this feels like a bottom up approach
         * need to work way up to the root
         * hmm but given the root of tree
         * 
         * might need a helper function to find
         * node being searched for init.
         */
            let curr = root

            while(curr) {
                if(p.val < curr.val && q.val < curr.val) curr = curr.left
                else if (p.val > curr.val && q.val > curr.val)curr = curr.right
                else return curr
            }
        }
    }

    

