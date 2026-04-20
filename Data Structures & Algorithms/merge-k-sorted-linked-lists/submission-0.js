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
     * @param {ListNode[]} lists
     * @return {ListNode}
     */
    // HOW can prob be broken down into smaller problems
    // THE STRAT: DIVIDE AND CONQUER
    // KIND OF LIKE CUP STACKING
    
    mergeKLists(lists) {
        if(!lists || lists.length == 0) return null;

        while(lists.length > 1) {
            const mergedList = [] 
            //should be using a for loop to merge 2 lists a X
            for(let i = 0; i < lists.length;i+=2){
                const l1 = lists[i]
                const l2 = (i+1) < lists.length ? lists[i+1]: null ;
                mergedList.push(this.mergeTwoLists(l1,l2));
            }
            lists = mergedList
        }
        return lists[0]

        

        // most brute force would be add them to an array and then sort them into
        // new linked list, BUT need to keep the address of old nodes


        /*
         * params: assuming the lists all have dif size
         * return: a linked list of combined lists
         * ex: not every list in lists are size n
         * psuedo: 
         */
    }
    mergeTwoLists(l1,l2){
            const dummy = new ListNode(0)
            let curr = dummy

            while(l1 && l2){
                if(l1.val < l2.val) {
                    curr.next = l1
                    l1 = l1.next
                }
                else {
                    curr.next = l2
                    l2 = l2.next
                }
                curr = curr.next
            }

            curr.next = l1 ? l1 : l2
            return dummy.next
        }
}
