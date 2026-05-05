class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n) {

       let one = 1
       let two = 1
        for(let i = 0; i < n - 1; i++){
            let temp = one
            one += two
            two = temp
        }
        return one
    
        /**
         * params: int n, # of steps
         * return: int output, # of ways to climb steps
         * examples: 1 + 2 , 2 + 1 are different ways of climbing
         * pseudo: 
         */
    }
}
