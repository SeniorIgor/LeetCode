// TODO: Solve again
class _Node {
    val: number
    neighbors: _Node[]

    constructor(val?: number, neighbors?: _Node[]) {
        this.val = (val===undefined ? 0 : val)
        this.neighbors = (neighbors===undefined ? [] : neighbors)
    }
}

// BFS
function cloneGraph(node: _Node | null): _Node | null {
    if(!node) {
        return null;
    }
    
    const result = new _Node(node.val);
    const queue: Array<_Node> = [node];
    const map = new Map();
    map.set(result.val, result);
    
    while(queue.length) {
        const current = queue.shift();

        if(!current) {
            return result;
        }

        for (let index = 0; index < current.neighbors.length; index++) {
            const neighbor = current.neighbors[index];
            const parent = map.get(current.val);

            if(!map.has(neighbor.val)) {
                const copy = new _Node(neighbor.val);
                map.set(copy.val, copy);
                queue.push(neighbor);
            }

            parent.neighbors.push(map.get(neighbor.val));
        }
    }

    return result;
};

// DFS
// function cloneGraph(node: _Node | null): _Node | null {
// 	const map = new Map();

//     const dfs = (root: _Node | null): _Node | null => {
//         if(!root) {
//             return null;
//         }

//         if(map.has(root.val)) {
//             return map.get(root.val);
//         }

//         const copy = new _Node(root.val);
//         map.set(root.val, copy);

//         for(let i = 0; i < root.neighbors.length; i++) {
//             const neighborCopy = dfs(root.neighbors[i]);

//             if(neighborCopy) {
//                 copy.neighbors.push(neighborCopy);
//             }
//         }

//         return copy;
//     }

//     return dfs(node);
// };

const first = new _Node(1);
const second = new _Node(2);
const third = new _Node(3);
const fourth = new _Node(4);

first.neighbors = [second, fourth];
second.neighbors = [first, third];
third.neighbors = [second, fourth];
fourth.neighbors = [first, third];

const result = cloneGraph(first);
// const firstCopy = result;
const secondCopy = result?.neighbors[0];
// const thirdCopy = result?.neighbors[0].neighbors[1];
const fourthCopy = result?.neighbors[1];


console.log({ firstCopy: secondCopy?.neighbors[0] === first, secondCopy: fourthCopy?.neighbors[0] === first });