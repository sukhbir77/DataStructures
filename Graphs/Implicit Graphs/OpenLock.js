/**
 * @param {string[]} deadends
 * @param {string} target
 * @return {number}
 */
var openLock = function(deadends, target) {
    let neighbors = node => {
        let ans = [];
        for (let i = 0; i < 4; i++) {
            let num = node[i];
            for (const change of [-1, 1]) {
                let x = (+num + change + 10) % 10
                ans.push(node.slice(0, i) + x + node.slice(i + 1));
            }
        }    
        return ans;
    }
    
    if (deadends.includes("0000")) {
        return -1;
    }
    
    let queue = ["0000"];
    let seen = new Set(deadends);
    seen.add("0000");
    
    let steps = 0;
    
    while (queue.length) {
        let currentLength = queue.length;
        let nextQueue = [];
        
        for (let i = 0; i < currentLength; i++) {
            const node = queue[i];
            if (node == target) {
                console.log(seen.size)  
                return steps;
            }

            for (const neighbor of neighbors(node)) {
                
                if (!seen.has(neighbor)) {
                    seen.add(neighbor);
                    nextQueue.push(neighbor);
                }
            }
        }
        
        steps++;
        queue = nextQueue;
    }

    console.log(seen.size)
    
    return -1;
};

openLock(["0201","0101","0102","1212","2002"], "0202")