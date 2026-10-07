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

        //finding our midpoint since it folds in half
        let fast = head
        let slow = head

        while(fast && fast.next) {
            fast = fast.next.next
            slow = slow.next
        }
        


        //disconnecting both lists and making 

        let second = slow.next
        let prev = (slow.next = null) // this is what separates the lists

        while(second){
            // reverse the second half of the linkedlist
            let temp = second.next
            second.next = prev
            prev = second
            second = temp
        }

        // merging the 1st half and the reveresed half
        let first = head
        second = prev

        while(second){
            let temp1 = first.next
            let temp2 = second.next

            first.next = second
            second.next = temp1

            first = temp1
            second = temp2
        }
    }
}
