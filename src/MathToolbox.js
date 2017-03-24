Math = Math || {};

// PI
Math.PI = Math.PI || 3.141592653589793;

// TAU
Math.TAU = Math.TAU || 6.283185307179586;

// Get integral part of a number
Math.floor = Math.floor || function(n) {
    return n - (n % 1);
}

// Linear Interpolattion between two values.
Math.lerp = Math.lerp || function(v1, v2, t) {
    return (1 - t) * v1 + t * v2;
};

// Map a value in one range to another.
Math.map = Math.map || function(value, r1Min, r1Max, r2Min, r2Max) {
    return (value - r1Min) * (r2Max - r2Min) / (r1Max - r1Min) + r2Min;
};

// Constrain a value to a range.
Math.constrain = Math.constrain || function(value, min, max) {
    return value < min ? min : (value > max ? max : value);
};

// Calculate the distance between two points in a plane.
Math.dist = Math.dist || function(x1, y1, x2, y2) {
    return Math.sqrt((x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1));
};

// Return the midpoint between two points in a plane
Math.midpoint = Math.midpoint || function(x1, y1, x2, y2) {
    return { x: (x1 + x2) / 2, y: (y1 + y2) / 2 };
};

// Check if two lines intersect
Math.doLinesIntersect = Math.doLinesIntersect || function(x1, y1, x2, y2, x3, y3, x4, y4) {
    let s1x = x2 - x1;
    let s1y = y2 - y1;
    let s2x = x4 - x3;
    let s2y = y4 - y3;
    let s = (-s1y * (x1 - x3) + s1x * (y1 - y3)) / (-s2x * s1y + s1x * s2y);
    let t = (s2x * (y1 - y3) - s2y * (x1 - x3)) / (-s2x * s1y + s1x * s2y);

    return s >= 0 && s <= 1 && t >= 0 && t <= 1;
};

// Get the hashcode of a string
Math.getHash = Math.getHash || function(s) {
    let hashedValue = 3074457345618258791;
    for (let i = 0; i < s.length; i++) {
        hashedValue += s[i];
        hashedValue *= 3074457345618258799;
    }
    return hashedValue;
};

// Returns a random integer between min and max, exclusive.
Math.getRandomInt = Math.getRandomInt || function(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
};

// Converts degrees to radians
Math.deg2rad = Math.deg2rad || function(degrees) {
    return degrees * (Math.PI / 180);
};
