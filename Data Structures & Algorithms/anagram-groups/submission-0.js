class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {

        let strsMap = new Map()

        strs.forEach(str => {
            let sortedStr = str.split("").sort().join("")
            if( strsMap.has(sortedStr)){
                strsMap.get(sortedStr).push(str)
            }
            else {
                strsMap.set(sortedStr, [str])
            }  
        })

        return Array.from(strsMap.values())
    }
}
