document.addEventListener('DOMContentLoaded', function() {
    const mazeContainer = document.getElementById('maze');
    const mazeSize = 20;
    const playerSize = 20;
    const maze = [];
    let playerPosition = { x: 0, y: 0 };

    // Create maze
    for (let i = 0; i < mazeSize; i++) {
        maze[i] = [];
        for (let j = 0; j < mazeSize; j++) {
            const isWall = Math.random() < 0.3; // 30% chance to be a wall
            maze[i][j] = isWall;
            const wallDiv = document.createElement('div');
            wallDiv.className = 'wall';
            wallDiv.style.left = `${j * 20}px`;
            wallDiv.style.top = `${i * 20}px`;
            if (isWall) {
                mazeContainer.appendChild(wallDiv);
            }
        }
    }

    // Add player
    const playerDiv = document.createElement('div');
    playerDiv.className = 'player';
    mazeContainer.appendChild(playerDiv);

    // Initial player position
    movePlayer(playerPosition.x, playerPosition.y);

    function movePlayer(x, y) {
        playerPosition.x = x;
        playerPosition.y = y;
        playerDiv.style.left = `${x * playerSize}px`;
        playerDiv.style.top = `${y * playerSize}px`;
    }

    // Move player with arrow keys
    document.addEventListener('keydown', function(event) {
        const key = event.key;
        let newX = playerPosition.x;
        let newY = playerPosition.y;

        if (key === 'ArrowUp') {
            newY--;
        } else if (key === 'ArrowDown') {
            newY++;
        } else if (key === 'ArrowLeft') {
            newX--;
        } else if (key === 'ArrowRight') {
            newX++;
        }

        // Check if the new position is valid
        if (newX >= 0 && newX < mazeSize && newY >= 0 && newY < mazeSize && !maze[newY][newX]) {
            movePlayer(newX, newY);
        }
    });
});
