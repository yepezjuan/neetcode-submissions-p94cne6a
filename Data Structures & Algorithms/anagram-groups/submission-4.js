class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        /**
         * params: list of strings
         * return: an array of arrays
         * examples: each arra has the same string maps
         * pseudo:
         *        - make a freq, map: key ->  char freq, val -> word
         *        - turn the freqmap into an array of the values array
         *        - return the new array 
         */

        let freq_map = new Map() // has,set,get METHODS
        for(let word of strs){
           let sortedWord = word.split("").sort().join()
           // you dont have to make it a map you can just sort the map
           if(freq_map.has(sortedWord)) freq_map.get(sortedWord).push(word)
           // you can push to a map
           else freq_map.set(sortedWord,[word])
        }

        return Array.from(freq_map.values())
    }
}
