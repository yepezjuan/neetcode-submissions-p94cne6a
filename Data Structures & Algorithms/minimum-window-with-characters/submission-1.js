class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        /**
         * params: input string s, target string t
         *          are inputs all same chars or are they mixnmatch
         * return: stubstring from s that holds all chars of t
         *          everything from t HAS TO BE PRESENT in returning substring
         *          otherwise return empty string
         * 
         * examples: s = hsdkxkjjdyfhgz, t = xyz , output => xkjjdyfhgz
         * psuedo: keep track of L and R
         *          but for each substring, make a hashmap that stores whats included
         *          need to keep track of og order, but we care about the frequency
         * 
         * 
         */

        let left = 0
        let right = 0
        let tMap = new Map()
        let subMap = new Map()

       

        let res = [-1.-1]
        let resLen = Infinity

        for(let ch of t){
            tMap.set(ch,(tMap.get(ch) || 0) + 1)
        }

        let have = 0
        let need = tMap.size

        //should make a hashmap of the target 
        // i could start the window w size of t.length otherwise return ""

        //edge case
        if (s.length < t.length) return ""


        while (right < s.length){

            // ADDING ALL THE INCOMING S CHARS
            let rightChar = s[right]
            subMap.set(rightChar,( subMap.get(rightChar)|| 0) + 1)

            if(tMap.get(rightChar) && subMap.get(rightChar) === tMap.get(rightChar)){
                have++
            }

            // WHILE LOOOP TRIES OPTIMIZING THE SIZE OF RETURNING STRING 

            while(have === need){
                if((right - left + 1) < resLen){
                    resLen = right - left + 1
                    res = [left,right]
                }
                let leftChar = s[left]
                subMap.set(leftChar, subMap.get(leftChar) - 1)
                if(tMap.get(leftChar) && subMap.get(leftChar) < tMap.get(leftChar)){
                    have--
                }
                left++
                
            }
            right++

        }
        return resLen === Infinity ? "": s.substring(res[0], res[1] + 1)
    }
}
