// BFS
// Time complexity: O(E + V)
// Space complexity: O(E + V)
// E - the number of edges
// V - the number of vertices
function findOrder(numCourses: number, prerequisites: number[][]): number[] {
  const graph: Map<number, Array<number>> = new Map();
  const indegrees = Array.from({ length: numCourses }, () => 0);

  for (let i = 0; i < prerequisites.length; i++) {
    const [from, to] = prerequisites[i];
    
    if(!graph.has(from)) {
      graph.set(from, []);
    }

    graph.get(from)?.push(to);
    indegrees[to]++;
  }

  const result: Array<number> = [];

  const queue: Array<number> = [];

  for (let i = 0; i < indegrees.length; i++) {
    if(indegrees[i] === 0) {
      queue.push(i);
    }    
  }

  while(queue.length) {
    const course = queue.shift() || 0;
    
    result.unshift(course);

    const children = graph.get(course) || [];

    for (let i = 0; i < children.length; i++) {
      const child = children[i];
      
      if(indegrees[child] - 1 === 0) {
        queue.push(child);
      }

      indegrees[child] -= 1;
    }
  }

  return result.length === numCourses ? result : [];
};

// DFS
// Time complexity: O(E + V)
// Space complexity: O(E + V)
// E - the number of edges
// V - the number of vertices
// function findOrder(numCourses: number, prerequisites: number[][]): number[] {
//     const graph: Map<number, Array<number>> = new Map();

//     for (let i = 0; i < prerequisites.length; i++) {
//       const [from, to] = prerequisites[i];
      
//       if(!graph.has(from)) {
//         graph.set(from, []);
//       }

//       graph.get(from)?.push(to);
//     }

//     const result: Array<number> = [];
//     const checked = new Set();
//     const visited = new Set();

//     const dfs = (course: number) => {
//       const children = graph.get(course) || [];

//       visited.add(course);

//       for (let i = 0; i < children.length; i++) {
//         const child = children[i];

//         if(checked.has(child)) {
//           continue;
//         }

//         if(visited.has(child)) {
//           return false;
//         }
        
//         if(graph.has(child)) {
//           if(!dfs(child)) {
//             return false;
//           }
//         } else {
//           result.push(child);
//           checked.add(child);
//         }
//       }

//       visited.delete(course);
      
//       result.push(course);
//       checked.add(course);

//       return true;
//     }

//     for (let i = 0; i < numCourses; i++) {
//       if(checked.has(i)) {
//         continue;
//       }
      
//       if(graph.has(i)) {
//         if(!dfs(i)) {
//           return [];
//         }
//       } else {
//         result.push(i);
//         checked.add(i);
//       }
//     }

//     return result;
// };

const numCourses = 4;
const prerequisites = [[1,0],[2,0],[3,1],[3,2]];

const result = findOrder(numCourses, prerequisites);
console.log({ result })
