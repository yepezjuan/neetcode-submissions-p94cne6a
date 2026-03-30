class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {

        let stack = []
        

        let open = ["{", "(", "["]
        // dont need a close lib bc we check that in helper func.
        for(let i = 0; i < s.length; i++){
            if(open.includes(s[i])){
                stack.push(s[i])
            }
            else{

                if(stack.length == 0)return false
                let top = stack.pop()

                if(!this.#isMatching(top,s[i])) {
                    return false
                }
            }
        }

        return stack.length == 0
    }

    #isMatching(open, close){
        if(open == "(" && close == ")") return true
        if(open == "{" && close == "}") return true
        if(open == "[" && close =="]") return true
        return false
    }
}
