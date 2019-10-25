let canvas = document.getElementById('gameCanvas');
let ctx = canvas.getContext("2d");

const GAME_WIDTH = 800;
const GAME_HEIGHT = 800;
const TILE_SIZE = 100

var board = new Board();

// GAME LOOP
function gameLoop() {
    ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);

    board.show(ctx);
}

setInterval(gameLoop, 20);

//https://www.youtube.com/watch?v=DZfv0YgLJ2Q&t=580s
