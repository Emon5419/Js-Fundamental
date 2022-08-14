// function getFactorial(number){
//     let factorial = 1; 
//     let i = 1;
//     while(i <= number){
//         factorial =factorial * i;
//         i++;
//     }
//     return factorial;
// }
// const myFactorial = getFactorial(6);
// console.log(myFactorial);


function getFactorial(number){
    let factorial = 1;
    let i = number;
    while(i >= i){
        factorial =factorial * i;
        i--;
    }
    return factorial;
}
const myFactorial = getFactorial(10);
console.log(myFactorial);
