class Vector {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    static Add(vector1, vector2) {
        var result = new Vector(
            vector1.x + vector2.x,
            vector1.y + vector2.y
        );
        return result;
    }

    static Div(vector, scalar) {
        var result = new Vector(
            vector.x/scalar,
            vector.y/scalar
        );
        return result;
    }
}