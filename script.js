document.getElementById('generate').addEventListener('click', generateMaze);

function generateMaze() {
    fetch('/maze')
        .then(response => response.json())
        .then(maze => drawMaze(maze));
}

function drawMaze(maze) {
    const canvas = document.getElementById('mazeCanvas');
    const ctx = canvas.getContext('2d');
    const cellSize = 20;
    canvas.width = maze[0].length * cellSize;
    canvas.height = maze.length * cellSize;

    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = 'white';
    for (let x = 0; x < maze.length; x++) {
        for (let y = 0; y < maze[x].length; y++) {
            if (maze[x][y]) {
                ctx.fillRect(y * cellSize, x * cellSize, cellSize, cellSize);
            }
        }
    }
}
