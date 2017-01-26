MathToolbox = MathToolbox || {};

// Linear Interpolattion between two values.
MathToolbox.lerp = function(v1, v2, t) {
    return (1 - t) * v1 + t * v2;
};

// Map a value in one range to another.
MathToolbox.map = function (value, r1Min, r1Max, r2Min, r2Max) {
    return (value - r1Min) * (r2Max - r2Min) / (r1Max - r1Min) + r2Min;
};

// Constrain a value to a range. 
MathToolbox.constrain = function(value, min, max) {
    return value < min ? min : (value > max ? max : value);
};

// Calculate the distance between two points in a plane.
MathToolbox.dist = function(x1, y1, x2, y2) {
    return Math.sqrt((x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1));
};

// Return the midpoint between two points in a plane
MathToolbox.midpoint = function (x1, y1, x2, y2) {
    return { x: (x1 + x2) / 2, y: (y1 + y2) / 2 };
}