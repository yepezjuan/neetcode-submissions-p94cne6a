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


        const inorderMap = new Map();
        inorder.forEach((val,i) => inorderMap.set(val,i))

        let preIndex = 0


        function buildTree(left,right){
            if(left > right) return null

            const rootVal = preorder[preIndex] //dont want thsi manipulated
            preIndex++
            let mid = inorderMap.get(rootVal)

            const root = new TreeNode(rootVal)

            root.left = buildTree(left, mid -1)
            root.right = buildTree(mid + 1, right)

            return root
        }
        return buildTree(0, inorder.length -1)
    }
}
