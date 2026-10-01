/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {boolean}
     */
    hasCycle(head) {

        let seenSet = new Set()

        while(head){
            if(seenSet.has(head)){
                return true
            }
            seenSet.add(head)
            head = head.next 
        }

        return false
    }
}
