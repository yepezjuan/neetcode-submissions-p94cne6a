class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
         function helper(a,b){
            if (a == "(" && b == ")") return true
            if(a == "[" && b == "]") return true
            if (a == "{" && b == "}") return true
            return false
        }

        let ourStack = []
        let open = ['(', '{', '[']

        for(let i = 0; i < s.length; i++){
            if(open.includes(s[i])) ourStack.push(s[i])
            else {
                if(ourStack.length == 0) return false
                let top = ourStack.pop()
                if(!helper(top, s[i])) return false
            }
        }
        return ourStack.length == 0
    }
}
