// let factorial = 1;
// for(let i = 1; i <= 5; i++) {
//     factorial = factorial * i;
// }
// console.log(factorial);

function getFactorial(number) {
    let factorial = 1;
    for (let i = 1; i <= number; i++) {
        factorial = factorial * i;
    }
    return factorial;
}

var firstFactorial = getFactorial(7);
console.log('Factorial Of 7 Is', firstFactorial);
 
var secoundFactorial = getFactorial(9);
console.log('Factorial Of 9 Is', secoundFactorial);
 

