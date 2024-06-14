class Node {
    val: number;
    next: Node | null;
    random: Node | null;

    constructor(val?: number, next?: Node | null, random?: Node | null) {
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
        this.random = (random === undefined ? null : random);
    }
}

function copyRandomList(head: Node | null): Node | null {
    const result = new Node();
    let current = result;
    const map = new Map();

    let local = head;

    while (local !== null) {
        const newNode = new Node(local.val, local.next, local.random);
        map.set(local, newNode);

        current.next = newNode;
        current = current.next;
        local = local.next;
    }

    local = result;

    while (local !== null) {
        if(local.random) {
            const newNode = map.get(local.random);
            
            local.random = newNode;
        }
        
        local = local.next;
    }
    
    return result.next;
};

const first = new Node(7);
const second = new Node(13);
const third = new Node(11);
const fourth = new Node(10);
const fifth = new Node(1);

first.next = second;
first.random = null;

second.next = third;
second.random = first;

third.next = fourth;
third.random = fifth;

fourth.next = fifth;
fourth.random = third;

fifth.next = null;
fifth.random = first;

const result = copyRandomList(first);
console.log(JSON.stringify(result, null, 4));

// Links
// old -> new

// Random
// 