const removeFromArray = function(arr, ...num) {
        const myArray = [];
        arr.forEach((item) => {
            if (!num.includes(item)) {
                myArray.push(item);
            }
        });
           return myArray; 
        };
        



// Do not edit below this line
module.exports = removeFromArray;
