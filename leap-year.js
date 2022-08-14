function isLeapYear(year){
    if(year % 4 == 0){
        return true;
    }
    // return false;
    else{
       return false 
    }
}

const myYear = 2087;
const isMyYearLeapYear = isLeapYear(myYear);
console.log('Is My Year Leap Year', isMyYearLeapYear);


const yourYear = 2224;
const isYourYearLeapYear = isLeapYear(yourYear);
console.log('Is Your Year Leap Year', isYourYearLeapYear);