class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n) {
        /**
         * params: n, int of number of steps to climb
         * return: number of ways to climb n stairs
         * example: no simple equation to solve this
         * pseduo: 1d dp question: top-down OR bottom-up
         *          - need to store in hash or do recursive calling
         *          top-down:  whats nways of n -1 
         *                      - make helepr function to check at each count
         *          - recursion is TOO SLOW for dp need tu use some sort of DS
         */
        
        const cache = new Array(n + 1).fill(-1)
        const dfs = (i) => {
            if(i >= n) return i == n
            if(cache[i] != -1) return cache[i]
            return (cache[i] = dfs(i +1) + dfs(i + 2))
        }
        return dfs(0)
    }
}
