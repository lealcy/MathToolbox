
class Math2 {
    // TAU is the value of 2 * PI.
    static get TAU() { return 6.283185307179586; }

    // Linear Interpolation between two values.
    static lerp(v1, v2, t) {
        return (1 - t) * v1 + t * v2;
    }

    // Map a value from one range to another.
    static map(value, r1Min, r1Max, r2Min, r2Max) {
        return (value - r1Min) * (r2Max - r2Min) / (r1Max - r1Min) + r2Min;
    }

    // Constrain a value to a range. Also refered as clip.
    static clamp(value, min, max) {
        return value < min ? min : (value > max ? max : value);
    }

    // Calculate the distance between two points in a plane.
    static distance(x1, y1, x2, y2) {
        return Math.sqrt((x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1));
    };

    // Return the midpoint between two points in a plane.
    // As it return an array with both components of the mid point, you can extract each axis by doing as follows:
    //      let [x, y] = Math2.midpoint(x1, y1, x2, y2);
    static midPoint(x1, y1, x2, y2) {
        return [(x1 + x2) / 2, (y1 + y2) / 2];
    };

    // Check if two lines intersect.
    static doLinesIntersect(x1, y1, x2, y2, x3, y3, x4, y4) {
        const s1x = x2 - x1;
        const s1y = y2 - y1;
        const s2x = x4 - x3;
        const s2y = y4 - y3;
        const dx = x1 - x3;
        const dy = y1 - y3;
        const d = -s2x * s1y + s1x * s2y;
        const s = (-s1y * dx + s1x * dy) / d;
        const t = (s2x * dy - s2y * dx) / d;

        return s >= 0 && s <= 1 && t >= 0 && t <= 1;
    };

    // Get the hashcode of a string.
    static stringHash(s) {
        let hashedValue = 3074457345618258791;
        for (let i = 0, j = s.length; i < j; i++) {
            hashedValue += s[i];
            hashedValue *= 3074457345618258799;
        }
        return hashedValue;
    };

    // Returns a random integer between min and max, exclusive max.
    static randomInt(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    };

    // Converts degrees to radians
    static deg2rad(degrees) {
        return degrees * (Math.PI / 180);
    };

    // Format number for exibition.
    static formatNumber(num, digits) {
        let units = ['k', 'M', 'G', 'T', 'P', 'E', 'Z', 'Y'];
        let decimal;
        for (let i = units.length - 1; i >= 0; i--) {
            decimal = Math.pow(1000, i + 1);
            if (num <= -decimal || num >= decimal) {
                return +(num / decimal).toFixed(digits) + units[i];
            }
        }
        return num;
    }

    // Color related functions:

    // Get the numerical index of an RGB color
    static colorIndex(r, g, b) {
        return r * 256 * 256 + g * 256 + b;
    }

    // Get the RGB values from the numerical index of a color
    static colorIndexToRGB(colorIndex) {
        return [(colorIndex >> 16) & 0xFF, (colorIndex >> 8) & 0xFF, (colorIndex) & 0xFF];
    }

    // Get the linear value of an RGB color channel
    static colorChannelToLinear(channel) {
        return channel <= 0.04045 ? channel / 12.92 : Math.pow((channel + 0.055) / 1.055, 2.4);
    }

    // Get the luminance value of a RGB color
    static colorLuminance(r, g, b) {
        return 0.2126 * Math2.colorChannelToLinear(r / 255) + 0.7152 * Math2.colorChannelToLinear(g / 255) + 0.0722 * Math2.colorChannelToLinear(b / 255);
    }

    // Get the perceived luminance of a RGB color
    static colorPerceivedLuminance(r, g, b) {
        const luminance = Math2.colorLuminance(r, g, b);
        return luminance <= 216 / 24389 ? luminance * (24389 / 27) : Math.pow(luminance, 1 / 3) * 116 - 16;
    }
}
