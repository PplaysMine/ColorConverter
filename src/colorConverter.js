module.exports = {
    convert: function(red, green, blue) {

        function checkValue(value) {
            if(value < 0 || value > 255) throw "The values should be between 0 and 255.";
        }

        checkValue(red);
        checkValue(blue);
        checkValue(green);

        red /= 255;
        green /= 255;
        blue /= 255;

        red = (red > 0.04045) ? Math.pow((red + 0.055) / (1.0 + 0.055), 2.4) : (red / 12.92);
        green = (green > 0.04045) ? Math.pow((green + 0.055) / (1.0 + 0.055), 2.4) : (green / 12.92);
        blue = (blue > 0.04045) ? Math.pow((blue + 0.055) / (1.0 + 0.055), 2.4) : (blue / 12.92);

        const xValue = red * 0.649926 + green * 0.103455 + blue * 0.103455;
        const yValue = red * 0.234327 + green * 0.743075 + blue * 0.022598
        const zValue = red * 0.0000000 + green * 0.053077 + blue * 1.035763

        const x = xValue / (xValue + yValue + zValue)
        const y = yValue / (xValue + yValue + zValue)

        return [x.toFixed(3), y.toFixed(3)];
    },

    main: function(r, g, b) {
        this.convert(r, g, b);
    }
}

main(255, 6, 1423);