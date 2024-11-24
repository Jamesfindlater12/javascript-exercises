const leapYears = function(year) {
    const isLeapYear = year % 4 === 0;
    const isCenturyYear = year % 100 === 0;
    const isFourCenturyYear = year % 400 === 0;

    if (isLeapYear &&
        (isFourCenturyYear || !isCenturyYear)) {
        return true; 
    } else {
        return false;
    }
  
};

console.log(leapYears(1993));

// Do not edit below this line
module.exports = leapYears;
