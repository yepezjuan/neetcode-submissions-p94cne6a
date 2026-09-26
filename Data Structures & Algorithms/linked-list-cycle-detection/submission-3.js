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

        let cycleSet = new Set()

        while(head){ // dont need to track head only need bool
            if(cycleSet.has(head)){
                return true
            }
            cycleSet.add(head)
            head = head.next

            
        }

        return false
   
    }
}
