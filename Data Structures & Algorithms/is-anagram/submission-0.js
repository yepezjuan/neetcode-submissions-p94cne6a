class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        /**]
         * params: 2 strings s and t
         * return: bool, if s & t are anagrams
         * examples: order does not matter, only care for freq of char
         * pseudo: sort both strings, loop through both and check each char at [i]
         */
        // might have to add a freq map
        let new_s = s.split('').sort().join('')
        let new_t = t.split('').sort().join('')

        if( new_s.length != new_t.length) return false

        for(let i = 0; i < new_s.length; i++){
            if(new_s[i] != new_t[i]) return false
        }
        return true
    }
}
