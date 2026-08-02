class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let openSet = new Set (['(', '{', '['])
        let stack = []

        function helper(start,end){
            if (start == '{' && end == "}") return true
            else if(start == '(' && end == ")") return true
            else if(start == '[' && end == "]") return true
            else return false
        }

        for(let c of s){
            if(openSet.has(c)){
                stack.push(c)  
            }
            else{
                if(stack.length == 0) return false
                let top = stack.pop()
                if(!helper(top,c)) return false
            
            }
        }
        return stack.length == 0 ? true : false
    }
}
