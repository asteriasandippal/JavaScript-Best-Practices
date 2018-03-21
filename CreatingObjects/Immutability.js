function createPoint(x, y) {
    return Object.freeze({
        x,
        y
    });
}

let point = createPoint(2, 3);

point.x = 20;

function createThreeDPoint(x, y, z) {
    let pointUnder = createPoint(x, y);
    pointUnder.z = z;
    return pointUnder;
}

console.log(point);

console.log(createThreeDPoint(4, 6, 9));


class otherPoint {
    constructor(x, y) {
        this.x = x;
        this.y = y;

        Object.freeze(this);
    }
}

let point2 = new otherPoint(3, 2);
point2.x = 23;
console.log(point2);


