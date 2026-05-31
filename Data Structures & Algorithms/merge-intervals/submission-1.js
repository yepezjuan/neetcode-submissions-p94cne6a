class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number[][]}
     */
    merge(intervals) {

        //if it says we can return any order SORT SORT SORT
        /**
         * params: array of objects (start, end)
         * return: modified interval
         * examples: if its partially overlapping make new interval
         *          also if inter is INSIDE of another interval 
         */

        intervals.sort((a,b) => a[0] - b[0])

        let output = []
        output.push(intervals[0])

        for(const inter of intervals){
            let start = inter[0]
            let end = inter[1]
            let lastEnd = output[output.length-1][1]

            if(start <= lastEnd) output[output.length -1][1] = 
            Math.max(end, lastEnd)

            else output.push(inter)
        }
        return output
    }
}
