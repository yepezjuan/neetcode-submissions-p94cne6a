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
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head, n) {
        // maybe have some sort of fast slow ptrs
        // have the slow one start n spaces after the fast ptr
        // have a counter reach n then slow can begin

        let dummy = new ListNode(0)
        dummy.next = head

        let fast = dummy
        let slow = dummy
        let counter = 0

        while(fast){
            fast = fast.next

            if (counter > n ){
                slow = slow.next
            }
            counter++
        }

        slow.next = slow.next.next

        return dummy.next
    }
}
