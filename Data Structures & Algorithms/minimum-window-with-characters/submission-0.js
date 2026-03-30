class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        let tMap = new Map()

        for(let ch of t){
            tMap.set(ch, (tMap.get(ch) || 0) + 1)
        }
        
        let subMap = new Map()
        let left = 0
        let need = tMap.size // keep track of diff chars needed
        let have = 0 
        let res = [-1,-1]
        let resLen = Infinity
        
        for(let right = 0; right < s.length; right++){
            let rightChar = s[right]
            subMap.set(rightChar, (subMap.get(rightChar) || 0) + 1)

            if(tMap.get(rightChar) && subMap.get(rightChar) === tMap.get(rightChar)){
                have++
            }

            while(have === need){

                if((right - left + 1) < resLen){
                    resLen = right - left + 1
                    res = [left, right]
                }

                let leftChar = s[left]
                subMap.set(leftChar, subMap.get(leftChar) - 1)
                if(tMap.get(leftChar) && subMap.get(leftChar) < tMap.get(leftChar)) {
                    have--;
                }
                left++;
            }
        }
        
        return resLen === Infinity ? "" : s.substring(res[0], res[1] + 1)

        //checking for valid window
        //valid = window has all characters
        //for(let i =0; i <s.length; i++){}

        //should i add all s chars at first then start making it smaller
        
    }
}
