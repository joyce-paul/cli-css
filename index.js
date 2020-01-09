//// PART 1 \\\\
function componentToHex(c) {
  var hex = c.toString(16);
  return hex.length == 1 ? "0" + hex : hex;
}

function hexToRgb(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ?
        {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
        } : null;
    }

    if (process.argv[2] === "hex"){
    console.log(hexToRgb(process.argv[3]))
}

//// PART 2 \\\\
function rgbToHex(r, g, b) {
        return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
      }
 if (process.argv[2] === "hex"){
    console.log(hexToRgb(process.argv[3]))
}
else if (process.argv[2] === "rgb"){
    console.log(rgbToHex(parseInt(process.argv[3]),parseInt(process.argv[4]),parseInt(process.argv[5])))
}

