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
         * params: a linked lists head
         * return: bool if cycle exists in head
         * examples: index is not a given, idk why they added that 
         * pseudo: need a curr pointer
         *          some sort of DS to track links, actuallly not
         *          bc they all only point to 1 node
         * make a set and collect values of visited nodes and break loop if repeat is found
         */


        let curr = head
        let travels = new Set()

        while(curr){ // exits if tail points to NULL
            if(travels.has(curr)){ // need to check for whole node not just its value
                return true
            }
            travels.add(curr)
            curr = curr.next
        }
        return false
    }
}
