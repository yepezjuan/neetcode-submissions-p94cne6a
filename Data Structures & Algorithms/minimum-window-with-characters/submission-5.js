class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        let tMap = new Map()

        for(let ch of t){
            tMap.set(ch, (tMap.get(ch)|| 0) + 1)
        }

        let have = 0
        let need = tMap.size
        let res = [-1,-1]
        let resLength = Infinity
        let subMap = new Map()
        let left = 0


        for(let right = 0; right < s.length; right++){
            let rightChar = s[right]

            subMap.set(rightChar, (subMap.get(rightChar) || 0) + 1)


            // want to keep right pointer growing as long as we in bounds
            if(tMap.get(rightChar)  && subMap.get(rightChar) == tMap.get(rightChar)){
                have++
            }
            // only checking for optimzations after that has been taken care of
            while(have === need){
                if((right - left + 1 )< resLength){
                    resLength = right - left + 1
                    res = [left,right]
                }

                let leftChar = s[left]
                subMap.set(leftChar, subMap.get(leftChar) - 1)
                if(tMap.get(leftChar) && subMap.get(leftChar) < tMap.get(leftChar)) have--
                left++
            }
        }
        return resLength === Infinity ? "" : s.substring(res[0], res[1] + 1)
    }
}
