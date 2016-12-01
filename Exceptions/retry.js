function primitiveMultiply(x, y) {
    var random = Math.random();

    if (random > 0.5) {
        return x * y;
    } else {
        throw new MultiplicationUnitFailure();
    }
}

function MultiplicationUnitFailure(message) {
    this.message = "message";
    this.stack = (new Error()).stack;
}

MultiplicationUnitFailure.prototype = Object.create(Error.prototype);
MultiplicationUnitFailure.prototype, name = "MultiplicationUnitFailure";

for (;;) {
    try {
        var result = primitiveMultiply(5, 5);
        console.log("Result is " + result);
        break;
    } catch (e) {
        if (e instanceof MultiplicationUnitFailure)
            console.log("Not valid multiplication unit");
        else
            throw e;
    }
}
