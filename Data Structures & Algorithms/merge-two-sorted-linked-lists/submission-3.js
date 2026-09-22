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
        //creating a pointer to a new ListNode
        let dummi = new ListNode(0)
        let curr = dummi

        while(list1 && list2){
            if(list1.val < list2.val){
                curr.next = list1
                list1 = list1.next
            }
            // using a else statement so i 
            else{
                curr.next = list2
                list2 = list2.next
            }
            curr = curr.next
        }
        curr.next = list1 || list2

        return dummi.next
    }
}
