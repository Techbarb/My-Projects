// Mazeg.js
document.addEventListener('DOMContentLoaded', () => {
    const mazeContainer = document.getElementById('maze-container');
    const generateButton = document.getElementById('generate-maze');
    const solveButton = document.getElementById('solve-maze');
    let maze = [];
    const size = 20;

    // Initialize maze with walls
    const initializeMaze = () => {
        maze = Array.from({ length: size }, () => Array(size).fill(1));
        mazeContainer.style.gridTemplateColumns = `repeat(${size}, 20px)`;
        mazeContainer.innerHTML = '';
        for (let row = 0; row < size; row++) {
            for (let col = 0; col < size; col++) {
                const cell = document.createElement('div');
                cell.id = `${row}-${col}`;
                cell.className = 'wall';
                mazeContainer.appendChild(cell);
            }
        }
    };

    // Maze generation using Recursive Backtracking
    const generateMaze = (x, y) => {
        const directions = [
            [0, 1], [1, 0], [0, -1], [-1, 0]
        ].sort(() => Math.random() - 0.5);

        maze[x][y] = 0;
        document.getElementById(`${x}-${y}`).className = 'path';

        for (const [dx, dy] of directions) {
            const nx = x + dx * 2, ny = y + dy * 2;
            if (nx >= 0 && nx < size && ny >= 0 && ny < size && maze[nx][ny] === 1) {
                maze[x + dx][y + dy] = 0;
                document.getElementById(`${x + dx}-${y + dy}`).className = 'path';
                generateMaze(nx, ny);
            }
        }
    };

    // Event listeners
    generateButton.addEventListener('click', () => {
        initializeMaze();
        generateMaze(0, 0);
        document.getElementById('0-0').className = 'start';
        document.getElementById(`${size - 1}-${size - 1}`).className = 'end';
    });

    solveButton.addEventListener('click', () => {
        alert("Maze solving feature is currently disabled.");
    });

    // Initialize the maze at the beginning
    initializeMaze();
});
