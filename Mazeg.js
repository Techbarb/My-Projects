function generateMaze(width, height) {
    const maze = Array.from({ length: height }, () => Array(width).fill(false));
    const stack = [];
    const directions = [
        [0, 1],  // Right
        [1, 0],  // Down
        [0, -1], // Left
        [-1, 0]  // Up
    ];

    function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    function isValid(x, y) {
        return x >= 0 && y >= 0 && x < height && y < width && !maze[x][y];
    }

    function carvePath(x, y) {
        maze[x][y] = true;
        stack.push([x, y]);

        while (stack.length) {
            const [cx, cy] = stack.pop();
            const shuffledDirections = shuffle([...directions]);

            for (const [dx, dy] of shuffledDirections) {
                const nx = cx + dx, ny = cy + dy;
                const nx2 = cx + 2 * dx, ny2 = cy + 2 * dy;

                if (isValid(nx2, ny2)) {
                    maze[nx][ny] = true;
                    maze[nx2][ny2] = true;
                    stack.push([nx2, ny2]);
                }
            }
        }
    }

    carvePath(1, 1);
    return maze;
}

module.exports = generateMaze;
