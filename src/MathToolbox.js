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
    let s1x = x2 - x1;
    let s1y = y2 - y1;
    let s2x = x4 - x3;
    let s2y = y4 - y3;
    let s = (-s1y * (x1 - x3) + s1x * (y1 - y3)) / (-s2x * s1y + s1x * s2y);
    let t = (s2x * (y1 - y3) - s2y * (x1 - x3)) / (-s2x * s1y + s1x * s2y);
    
    return s >= 0 && s <= 1 && t >= 0 && t <= 1;
}

// Get the hashcode of a string
Mathtoolbox.getHash = function(s) {
    let hashedValue = 3074457345618258791;
    for (let i = 0; i < s.length; i++) {
        hashedValue += s[i];
        hashedValue *= 3074457345618258799;
    }
    return hashedValue;
}

