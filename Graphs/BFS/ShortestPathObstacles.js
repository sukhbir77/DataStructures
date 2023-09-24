

/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number}
 */
var shortestPath = function(grid, k) {
    let valid = (row, col) => {
        return 0 <= row && row < m && 0 <= col && col < n;
    }
    
    let m = grid.length;
    let n = grid[0].length;
    let queue = [[0, 0, k]];
    let seen = [];
    for (let i = 0; i < m; i++) {
        seen.push([]);
        for (let j = 0 ; j < n; j++) {
            seen[i].push(new Array(k + 1).fill(-1));
        }
    }
    
    let directions = [[0, 1], [1, 0], [0, -1], [-1, 0]];
    let steps = 0;
    
    while (queue.length) {
        let currentLength = queue.length;
        let nextQueue = [];
        
        for (let i = 0; i < currentLength; i++) {
            let [row, col, remain] = queue[i];
            if (row == m - 1 && col == n - 1) {
                return steps;
            }

            // if the current square is an obstacle, we need to spend one of our removals
            if (grid[row][col] == 1) {
                if (remain == 0) {
                    continue;
                } else {
                    remain--;
                }
            }

            // if the square has already been visited, but with more removals, then the current
            // path is pointless, since more removals is better
            if (seen[row][col] >= remain) {
                continue;
            }

            seen[row][col] = remain;
            for (const [dx, dy] of directions) {
                let nextRow = row + dy, nextCol = col + dx;
                if (valid(nextRow, nextCol)) {
                    nextQueue.push([nextRow, nextCol, remain]);
                }
            }
        }
        
        queue = nextQueue;
        steps++;
        console.log(seen);
    }

    
    return -1;
};

shortestPath([[0,0,0],[1,1,0],[0,0,0],[0,1,1],[0,0,0]], 1)