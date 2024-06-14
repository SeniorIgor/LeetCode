function canFinish(numCourses: number, prerequisites: number[][]): boolean {
    // 1. Build a graph
    // 2. Find a cycle

    const graph: Map<number, Array<number>> = new Map();

    for (let i = 0; i < prerequisites.length; i++) {
      const [from, to] = prerequisites[i];
      
      if(!graph.has(from)) {
        graph.set(from, []);
      }

      // Если graph.get(to).find(from) -> cycle
      graph.get(from)?.push(to);
    }

    const dfs = (course: number, visited: Set<number>): boolean => {

    }

    let result = true;

    for (let i = 0; i < prerequisites.length; i++) {
      result = result && dfs(prerequisites[i][0], new Set());
    }

    return result;
};

const numCourses = 2;
const prerequisites = [[1,0]];

const result = canFinish(numCourses, prerequisites);
console.log({ result })

// [0,1]

// 0: [1]
// 1: [2]
// 2: [3]