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

        // whats the lowest node we can reach before 

        // want to keep track of what we are returning
         let curr = root
        // smaller problem from original solution

        while(curr) {
             // is root == p or q, p on the left or q on the left, p on the right or q on the right
            if(p.val < curr.val && q.val < curr.val) curr = curr.left
            else if(p.val > curr.val && q.val > curr.val) curr = curr.right

            // every other option we are at LCA
            else return curr

            // is the LCA in the right or in the left
            // or are we already at the LCA

        
        // its all on the left or  its all on the right, or 
        }
       
       
    }
}
