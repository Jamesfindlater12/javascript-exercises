const repeatString = function(str, num) {
    if (num < 0) return "ERROR";
    let result = ""
    for (i = 0; i < num; i++) {
        const input = str;
        result += input;
    }

    return result;

};

// Do not edit below this line
module.exports = repeatString;
