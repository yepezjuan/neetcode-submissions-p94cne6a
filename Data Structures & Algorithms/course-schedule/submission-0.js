class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {boolean}
     */
    canFinish(numCourses, prerequisites) {

        /**
         * params: int num of courses needed to take
         * return: bool if possible or not possible
         * examples: ex.2 shows a contradiction so it wont work
         * pseudo: 
         */

        let graph = new Map()

        for(const [course,prereq]  of prerequisites){
            if(!graph.has(course)){
                graph.set(course,[])
            }
            graph.get(course).push(prereq)
        }

        const UNVISITED = 0
        const VISITING = 1
        const VISITED = 2
        const states = new Array(numCourses).fill(UNVISITED)

        const dfs = (node) => {
            if(states[node] == VISITING) return false
            if(states[node] == VISITED) return true

            states[node] = VISITING

            if(graph.has(node)){
                for(const neighbor of graph.get(node)){
                    if(!dfs(neighbor)){
                        return false
                    }
                }
            }
            states[node] = VISITED
            return true
        }
        for(let i = 0; i < numCourses; i++){
            if(!dfs(i)) return false
        }
        return true
    }
}
