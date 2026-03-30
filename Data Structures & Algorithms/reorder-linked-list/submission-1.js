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
     * @return {void}
     */
    reorderList(head) {

        //PART 1: FINDING MID POINT
        let fast = head
        let slow = head

        while(fast && fast.next){
            slow = slow.next
            fast = fast.next.next
        }

        //PART 2: UNLINKING THE 2 LISTS
        let second = slow.next
        let prev = (slow.next = null)

        while(second) {
            let temp = second.next
            second.next = prev
            prev = second
            second = temp
        }

        //PART 3: WEIVING THE TWO LISTS

        let first = head
        second = prev

        while(second) {
            let temp1 = first.next
            let temp2 = second.next

            first.next = second
            second.next = temp1

            first = temp1
            second = temp2
        }
    }
}
