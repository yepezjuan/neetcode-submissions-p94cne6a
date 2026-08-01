class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        /**
         * params: string s built w parenthesis
         * return: a bool, checking if s valid
         * examples: i understand the sequence of the parenthesis
         * pseudo: need to utilize a stack, addeding and deleted frequently
         *          what are the states? 
         *          adding a open paren.
         *          adding a closed paren.
         *              check if previous is the correct opening paren.
         *              use helper fn for this
         *          return stack ? false : true 
         */

        let stack = []
        let openSet = new Set (['[', '{', '('])

        function helper(start, end){
            if(start == "[" && end == "]") return true
            else if(start == "{" && end == "}") return true
            else if(start == "(" && end == ")") return true
            return false
            
        }

        for(let c of s){
            if(openSet.has(c)){
                stack.push(c)
            }
            else{
                if (stack.length == 0) return false
                let top = stack.pop()
                if (!helper(top,c )) return false
                
            }
            
        }
        return stack.length == 0 ? true : false
    }
}
