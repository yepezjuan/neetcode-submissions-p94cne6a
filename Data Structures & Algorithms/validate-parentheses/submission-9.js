class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        /**
         * params: a string 's'
         * returns: a bool checking if s is valid
         * examples: chars only include diff types of parenthesis
         * pseudo: have a openset to check for open paren.
         *          only options are open paren or anything else
         *          have a helper fn check if start, end are valid
         *          have to pop stack and assign it to a var
         */

        let openSet = new Set(['(', '[', '{'])
        let stack = []

        function helper(start, end){
            if(start == "(" && end == ")") return true
            else if(start == "[" && end == "]") return true
            else if(start == "{" && end == "}") return true
            else return false
        }

        for(let c of s){
            if(openSet.has(c)){
                stack.push(c)
            }
            else {
                if(stack.length == 0) return false
                
                if(!helper(stack.pop(),c)) return false
            }
        }

        return stack.length == 0? true : false
    }
}
