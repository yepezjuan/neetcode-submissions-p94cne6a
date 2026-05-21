class Solution {
    /**
     * @param {number[][]} intervals
     * @param {number[]} newInterval
     * @return {number[][]}
     */
    insert(intervals, newInterval) {
        /**
         * params: intervals list of intervals & newInt > [x,y]
         * return: same intervals but with new modification
         * examples: make new interval if old and new are mixed, do we have to output
         * pseudo: ints BEFORE new Int
         *          ints INBETWEEN new Int
         *           ints AFTER new Int
         */

        let i = 0
        let n = intervals.length
        let output = []


        while(i < n && intervals[i][1] < newInterval[0]){
            output.push(intervals[i])
            i++
        }

        while(i < n && intervals[i][0] <= newInterval[1]) {
            newInterval[0] = Math.min(intervals[i][0], newInterval[0])
            newInterval[1] = Math.max(intervals[i][1], newInterval[1])
            i++
        }
        output.push(newInterval)

        while(i < n ){
            output.push(intervals[i])
            i++
        }
        return output
    }
}
