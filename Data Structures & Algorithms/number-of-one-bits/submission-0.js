class Solution {
    /**
     * @param {number} n - a positive integer
     * @return {number}
     */
    hammingWeight(n) {
        /**
         * params: n a 32 bit number
         * return: count of 1's in number n
         * example: increment count for each seen 1
         * pseudo: 
         */

        let count = 0

        while (n > 0){
            count += n % 2
            n = n >> 1
        }

        return count
    }
}
