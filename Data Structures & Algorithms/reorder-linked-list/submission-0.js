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
        //part 1: find mid and tail

        let fast = head.next
        let slow = head

        while(fast && fast.next){
            slow = slow.next
            fast = fast.next.next
        }

        //part 2: reversing 2nd half
        let second = slow.next
        let prev = (slow.next = null)

        while(second){
            let temp = second.next
            second.next = prev
            prev = second
            second = temp
            
        }


        //part 3: weaving the two lists together
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
