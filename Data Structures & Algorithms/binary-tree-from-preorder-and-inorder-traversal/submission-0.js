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
     * @param {number[]} preorder
     * @param {number[]} inorder
     * @return {TreeNode}
     */
    buildTree(preorder, inorder) {

        //build out a hashmap
        const inorderMap = new Map();
        inorder.forEach((val,i) => inorderMap.set(val, i));

        //begin with our 1st index
        let preIndex = 0;

        function buildTree(left,right){
            if(left > right) return null // we have finished building left side

            const rootVal = preorder[preIndex]
            preIndex++;
            const root = new TreeNode(rootVal);

            const mid = inorderMap.get(rootVal);

            root.left = buildTree(left, mid - 1)
            root.right = buildTree(mid + 1,right)

            return root
        }

        
        return buildTree(0, inorder.length - 1);
    }
    

}
