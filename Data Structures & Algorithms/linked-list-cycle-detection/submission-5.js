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

        /**
         * params: head of linkedlist
         * return: bool, found cycle?
         * examples: cylce returns to at least one of nodes
         * pseudo: build a set, rotate through head, check for cycle
         */

        let mySet = new Set()
        let curr = head

        while(curr){
            // checking for whole node bc, a diff node can have same .val
            if(mySet.has(curr)){
                return true
            }
            
            mySet.add(curr)
            curr = curr.next
        }

        return false
    }
}
