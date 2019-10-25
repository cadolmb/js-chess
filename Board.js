class Board {

    constructor() {
        this.whitePieces = [];
        this.blackPieces = [];
        this.setupPieces();
    }

    setupPieces() {
        // whitePieces.push(new King(1, 1, true));
    }

    show(ctx) {
        // DRAW BOARD
        for (var i = 0; i < 8; i++) {
            for (var j = 0; j < 8; j++) {
                if ((i+j)%2 == 0) {
                    ctx.fillStyle = "WHITE";
                }else {
                    ctx.fillStyle = "BLACK";
                }
                ctx.fillRect(i*TILE_SIZE, j*TILE_SIZE, TILE_SIZE, TILE_SIZE);
            }
        }

        // DRAW WHITE PIECES
        for (var i = 0; i < whitePieces.length; i++) {
            whitePieces[i].show();
        }
    }

}
