// TODO: Solve again
// BFS
// Time: O(N + Q * (V + E))
// Space: O(V + E)
// N - the number of equations
// Q - the number of queries
// V - the number of vertices
// E - the number of edges
function calcEquation(equations: string[][], values: number[], queries: string[][]): number[] {
  const map: Map<string, Map<string, number>> = new Map();
  const result: Array<number> = [];

  // Build the graph
  for (let i = 0; i < equations.length; i++) {
    const [key1, key2] = equations[i];
    
    if(!map.has(key1)) {
      map.set(key1, new Map());
    }         
      
    map.get(key1)?.set(key2, values[i]);
    
    if(!map.has(key2)) {
      map.set(key2, new Map());
    } 

    map.get(key2)?.set(key1, 1 / values[i]);
  }

  const bfs = (key1: string, key2: string): number => {
    if(!map.has(key1) || !map.has(key2)) {
      return -1;
    }

    if(key1 === key2) {
      return 1;
    }

    const visited = new Set();
    const queue: Array<[string, number]> = [[key1, 1]];
    visited.add(key1);

    while (queue.length) {
      const [path = '', cost = 1] = queue.shift() || [];

      if(path === key2) {
        return cost;
      }
  
      const neighbors = map.get(path) || [];

      for(const [curPath, curCost] of neighbors) {
        if(visited.has(curPath)) {
          continue;
        }

        if(path === key2) {
          return cost * curCost;
        }

        queue.push([curPath, curCost * cost]);
        visited.add(path);
      }
    }
    
    return -1;
  }

  for (let i = 0; i < queries.length; i++) {
    const [from, to] = queries[i];
    
    result.push(bfs(from, to));
  }

  return result;
};

// DFS
// Time: O(N + Q * (V + E))
// Space: O(V + E)
// N - the number of equations
// Q - the number of queries
// V - the number of vertices
// E - the number of edges
// function calcEquation(equations: string[][], values: number[], queries: string[][]): number[] {
//     const map: Map<string, Map<string, number>> = new Map();
//     const result: Array<number> = [];

//     // Build the graph
//     for (let i = 0; i < equations.length; i++) {
//       const [key1, key2] = equations[i];
      
//       if(!map.has(key1)) {
//         map.set(key1, new Map());
//       }         
        
//       map.get(key1)?.set(key2, values[i]);
      
//       if(!map.has(key2)) {
//         map.set(key2, new Map());
//       } 

//       map.get(key2)?.set(key1, 1 / values[i]);
//     }

//     const dfs = (key1: string, key2: string, visited: Set<string>): number => {
//       if(!map.has(key1) || !map.has(key2)) {
//         return -1;
//       }

//       if(key1 === key2) {
//         return 1;
//       }

//       const possibleWeight = map.get(key1)?.get(key2);

//       if(possibleWeight !== undefined) {
//         return possibleWeight;
//       }

//       const children = map.get(key1) || [];
//       visited.add(key1);

//       for(const [path, cost] of children) {
//         if(visited.has(path)) {
//           continue;
//         }
        
//         const weight = dfs(path, key2, visited);

//         if(weight !== -1) {
//           return cost * weight;
//         }
//       }

//       return -1;
//     }

//     for (let i = 0; i < queries.length; i++) {
//       const [key1, key2] = queries[i];
      
//       result.push(dfs(key1, key2, new Set()));
//     }

//     return result;
// };

const equations = [["a","b"],["b","c"]];
const values = [2.0,3.0];
const queries = [["a","c"],["b","a"],["a","e"],["a","a"],["x","x"]];

const result = calcEquation(equations, values, queries);
console.log({ result })


// a / b = 2
// b / c = 3
// a = 6
// b = 3
// c = 1