class Piece {

    constructor(x, y, isWhite) {
        this.position = createVector(x, y);
        this.screenPosition = createVector(x * TILE_SIZE, y * TILE_SIZE);

        this.captured = false;
        this.isWhite = isWhite;
    }

    show(){}
    move(){}
}

class King {
    constructor(x, y, isWhite) {
        super(x, y, isWhite);
    }

    show(){

    }
    move(){}
}
