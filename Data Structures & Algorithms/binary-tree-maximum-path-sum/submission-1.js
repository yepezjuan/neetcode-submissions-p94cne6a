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
    maxPathSum(root) {

        let globalMax = -Infinity

        function dfsHelper(root) {
            if(!root) return 0

            //checking for lrgest node val
            const leftGain = Math.max(dfsHelper(root.left),0)
            const rightGain = Math.max(dfsHelper(root.right),0)

            //checking for max path for this root

            globalMax = Math.max (globalMax, leftGain + root.val + rightGain)
            // this is why we need to use left/right Gains to add their val


            return root.val + Math.max(leftGain, rightGain)
        }

        dfsHelper(root)
        return globalMax



        /**
         * params: binary tree 
         * return: int sum
         * examples: tracking highest sum only
         * psuedo: bottom up approach POST ORDER
         * that way tree is parsed left -> right
         * IT IS RECURSED DEPTH FIRST
         * EACH NODE COMPUTES ITS BEST UPWARD CONTRIBUTION
        */
    }
}
