// TODO: Solve again
// BFS
// Time Complexity: O(V + E)
// Space Complexity: O(V + E)
// V - the number of vertices
// E - the number of edges
function canFinish(numCourses: number, prerequisites: number[][]): boolean {
  const graph: Map<number, Array<number>> = new Map();
  const indegrees = Array.from({ length: numCourses }, () => 0);

  // Build the graph
  for (let i = 0; i < prerequisites.length; i++) {
    const [from, to] = prerequisites[i];
    
    if(!graph.has(from)) {
      graph.set(from, []);
    }

    indegrees[to]++;
    graph.get(from)?.push(to);
  }

  const queue: Array<number> = [];

  for(let i = 0; i < indegrees.length; i++) {
    const degree = indegrees[i];
    
    if(degree === 0) {
      queue.push(i);
    }
  }

  let count = 0;

  while (queue.length) {
    const course = queue.shift();
    count++;

    const list = graph.get(course || 0) || [];

    for (const item of list) {
      const value = indegrees[item];
      indegrees[item] = value - 1;
      
      if(value - 1 === 0) {
        queue.push(item);
      }
    }
  }

  return count === numCourses;
};

// DFS
// Time Complexity: O(V + E)
// Space Complexity: O(V + E)
// V - the number of vertices
// E - the number of edges
// function canFinish(numCourses: number, prerequisites: number[][]): boolean {
//   const graph: Map<number, Array<number>> = new Map();
//   const checked = new Set();
//   const visited = new Set();

//   for (let i = 0; i < prerequisites.length; i++) {
//     const [from, to] = prerequisites[i];
    
//     if(!graph.has(from)) {
//       graph.set(from, []);
//     }

//     graph.get(from)?.push(to);
//   }

//   const dfs = (course: number): boolean => {      
//     const courseList = graph.get(course);

//     if(!courseList) {
//       return true;
//     }

//     checked.add(course);
//     visited.add(course);

//     for(let i = 0; i < courseList.length; i++) {
//       if(visited.has(courseList[i])) {
//         return false;
//       }

//       if(checked.has(courseList[i])) {
//         continue;
//       }
      
//       if(!dfs(courseList[i])) {
//         return false;
//       }
//     }

//     visited.delete(course);

//     return true;
//   }

//   for (let i = 0; i < numCourses; i++) {
//     if(!checked.has(i) && !dfs(i)) {
//       return false;
//     }
//   }

//   return true;
// };

const numCourses = 2;
const prerequisites = [[1,0]];

const result = canFinish(numCourses, prerequisites);
console.log({ result })

// [0,1]

// 0: [1]
// 1: [2]
// 2: [3]