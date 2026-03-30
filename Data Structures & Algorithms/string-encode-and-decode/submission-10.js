class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let output = ""

        strs.forEach(str => {
            output += str.length + "#" + str
        })
        return output
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {

        let output  = []
        let i = 0

        while (i < str.length) {
            let j = i
            while (str[j] != "#"){
                j++
            }
            let strLength = parseInt(str.slice(i, j)) // dont do j + 1 bc j has hit # atp
            let actualStr = str.slice(j+ 1, j+ strLength + 1) // do +1 bc j+ strLength is not inclusive of last char
            output.push(actualStr)

            i = j + strLength + 1
        }
        return output
    }
}
