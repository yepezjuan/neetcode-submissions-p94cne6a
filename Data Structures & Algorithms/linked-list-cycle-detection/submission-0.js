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

        let curr = head; // need to track this
        let visitedMap = new Set() //USE A SET TO FIND CYCLES
        // most unique people wear sets
        // really only need to b
        while(curr !== null) {
            if(visitedMap.has(curr)){
                return true;
            }
            visitedMap.add(curr);
            curr = curr.next;
        }
        return false
        /** 
         * case 1 we have a cycle
         * case 2 NO cycle
         * 
         * more important find a cycle
         * else return false
         */
    }
}
