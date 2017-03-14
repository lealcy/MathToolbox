MathToolbox = MathToolbox || {};

// Linear Interpolattion between two values.
MathToolbox.lerp = function(v1, v2, t) {
    return (1 - t) * v1 + t * v2;
};

// Map a value in one range to another.
MathToolbox.map = function(value, r1Min, r1Max, r2Min, r2Max) {
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
MathToolbox.midpoint = function(x1, y1, x2, y2) {
    return { x: (x1 + x2) / 2, y: (y1 + y2) / 2 };
}

// Check if two lines intersect
MathToolbox.doLinesIntersect = function(x1, y1, x2, y2, x3, y3, x4, y4) {
    if (x1 == x2) {
        return !(x3 == x4 && x1 != x3);
    } 
    if (x3 == x4) {
        return true;
    } 
    // Both lines are not parallel to the y-axis
    return (y1-y2)/(x1-x2) !== (y3-y4)/(x3-x4);
}
