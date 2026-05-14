class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    numDecodings(s) {


        /**
         * params: a string s with numbers only
         * return: number of diff ways of decoding
         * examples: have max 2 digits for one char
         * pseduo:
         *          what ds to store the memoization
         *          need to loop through each char
         *          check max of recursively checking string
         *          use ascii value for
         * 
         *          using some sort of prefix? since using a map before hand
         * 
         * questions: is it only upper case? 
         */
        const n = 26
        // key is : 1-26, val = CHAR ("A")
        let map = new Map()
        map.set(s.length,1)

        function dfs(i){
            if(map.has(i)){
                return map.get(i)
            }
            if(s.charAt(i) === '0'){
                return 0
            }

            let curr = dfs(i + 1)
            if(
                i + 1 < s.length &&
                (s.charAt(i) ==='1'||
                (s.charAt(i) === '2' && s.charAt(i + 1) < '7'))
                
            ){
                curr += dfs(i + 2)
            }
            map.set(i,curr)
            return curr
        }
        return dfs(0)
        
    }
}
