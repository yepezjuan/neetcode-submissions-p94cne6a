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
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1, list2) {
        let dummi = new ListNode(0)
        let newHead = dummi
        let curr1 = list1
        let curr2 = list2

        /**
         * params: two LinkedLists 1 and 2
         * return newHead 
         * examples: adds dupes in correct order
         * pseudo: make newList, keep track of curr ptr for each
         */

        while(curr1 && curr2){
            if(curr1.val < curr2.val){
                newHead.next = curr1
                curr1 = curr1.next
            }
            else{
                newHead.next = curr2
                curr2 = curr2.next 
            }
            newHead = newHead.next

        }

        newHead.next = curr1 || curr2

        return dummi.next
    }
}
