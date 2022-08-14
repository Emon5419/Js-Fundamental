// var inches = 132;
// var feet   = inches / 12;

// console.log(feet);

function milesTokilometer(miles){
    var km = miles * 1.60934;
    return km;
}

var marathon = milesTokilometer(26.2);
console.log('marathon in kilometer', marathon);