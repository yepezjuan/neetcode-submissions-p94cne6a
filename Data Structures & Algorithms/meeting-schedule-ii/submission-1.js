/**
 * Definition of Interval:
 * class Interval {
 *   constructor(start, end) {
 *     this.start = start;
 *     this.end = end;
 *   }
 * }
 */

class Solution {
    /**
     * @param {Interval[]} intervals
     * @returns {number}
     */
    minMeetingRooms(intervals) {

        intervals.sort((a,b) => a.start-b.start)
        let minHeap = new MinPriorityQueue()

        for(const inter of intervals){
           if( !minHeap.isEmpty() && inter.start >= minHeap.front()){
            minHeap.pop()
           }
           minHeap.push(inter.end)
        }

        return minHeap.size()
        
    }
}
