// 1.If user is 18 or older , give feedback: 'You are allowed to Marry' but if not 18 console feedback stating to wait for the number of years he needs to turn 18.
const userAge = 15;
userAge>18 ? console.log("You are allowed to Marry") : console.log(`You need to wait for ${18-userAge} years to get married :(`);

// 2. Compare the values of myAge and yourAge. Based on the comparison and log the result to console stating who is older.
// Enter your age: 30
// You are 5 years older than me.
const myAge=45,yourAge=30;
myAge>yourAge ? console.log(`I am ${myAge-yourAge} years older than you`) : console.log(`You are ${yourAge-myAge} years older than me`);

// 3. If myAge is greater than yourAge return 'yourAge is greater than myAge ' else 'myAge is less than yourAge'. Try to implement it in to ways.
//1st way
myAge>yourAge ? console.log(`My age:${myAge} is greater than your age:${yourAge}`) : console.log(`My age ${myAge} is less than your age ${yourAge}`)
//2nd way
if(myAge > yourAge)
    console.log(`My age:${myAge} is greater than your age:${yourAge}`);
else
    console.log(`My age ${myAge} is less than your age ${yourAge}`)

// 4. Check, if a number is even or not.
const numberIsEvenOrOdd = 9;
numberIsEvenOrOdd % 2 == 0 ? console.log(`${numberIsEvenOrOdd} is even`):console.log(`${numberIsEvenOrOdd} is odd`)

// 5. Write a code which can give grades to students according to theirs scores:
// 80-100, A
// 70-79, B
// 60-69, C
// 50-59, D
// 0-49, F
const myScore = 1;
if(myScore>=80 && myScore <100)
    console.log(`for ${myScore} your grade is A`);
else if(myScore>=70 && myScore <80)
    console.log(`for ${myScore} your grade is B`);
else if(myScore>=60 && myScore <70)
    console.log(`for ${myScore} your grade is C`);
else if(myScore>=50 && myScore <60)
    console.log(`for ${myScore} your grade is D`);
else if(myScore<50 && myScore>=0)
    console.log(`for ${myScore} your grade is F`);
else 
    console.log("Invalid marks");

// 6. Check if the season is Rainy, Winter, Spring or Summer. If the user input is :
// September, October or November, the season is Rainy.
// December, January or February, the season is Winter.
// March, the season is Spring
//  April, May, June, July or August, the season is Summer
const monthOfTheYear = "April".toLowerCase();
switch(monthOfTheYear){
    case 'september':
    case 'october':
    case 'november':
        console.log("It's Rainy Season");
        break;
    case 'december':
    case 'january':
    case 'february':
        console.log("It's Winter Season");
        break;
    case 'march':
        console.log("It's Spring Season");
        break;
    case 'april':
    case 'may':
    case 'june':
    case 'july':
    case 'august':
        console.log("It's Summer Season");
        break;
    default:
        console.log("!!!Wrong input");
        break;
}

// 7. Check if a day is weekend day or a working day. Your script will take day as an input.
const dayOfTheWeek='SundaY'.toLowerCase();
switch(dayOfTheWeek){
    case 'monday':
    case 'tuesday':
    case 'wednesday':
    case 'thursday':
    case 'friday':
        console.log(`${dayOfTheWeek} is a weekday :(`);
        break;
    case 'saturday':
    case 'sunday':
        console.log(`${dayOfTheWeek} is a Weekend :)`);
        break;
    default:
        console.log('Wrong Input');
        break;
}

// 8. Write a program which tells the number of days in a month.
const daysOfTheMonth = 'April'.toLowerCase();
switch(daysOfTheMonth){
    case 'april':
    case 'june':
    case 'september':
    case 'november':
        console.log(`${daysOfTheMonth} has 30 days`);
        break;
    case 'january':
    case 'march':
    case 'may':
    case 'july':
    case 'august':
    case 'october':
    case 'december':
        console.log(`${daysOfTheMonth} has 31 days`);
        break;
    case 'february':
        console.log(`${daysOfTheMonth} has 28 or 29 days depending on leap year`);
        break;
    default:
        console.log('Invalid Input');
        break;
}  

// 9. Write a program to check whether the year is leap year or not.
const leapYearOrNot = 2049;
(leapYearOrNot % 4 === 0 && (leapYearOrNot % 100 !== 0 || leapYearOrNot % 400 === 0)) ? console.log(`${leapYearOrNot} is a leap year`) : console.log(`${leapYearOrNot} is not a leap year`);

// 10. Write a JavaScript ternary expression that checks the following conditions:
// If the first condition (condition1) is true, it should check the second condition (condition2). If condition2 is true, set the result to 'A', otherwise set it to 'B'.
// If the first condition (condition1) is false, it should check another condition (condition3). If condition3 is true, set the result to 'C', otherwise set it to 'D'.
const lateCheckIn= true;
const EarlyCheckOut=false;
const lossOfPay = true;
const ternaryCheck = lateCheckIn ? EarlyCheckOut ? console.log('A'):console.log('B') : lossOfPay ? console.log('C') : console.log('D');

// 11. What will be the result of the following nested ternary expression:
let result = true ? false ? true ? 'A' : 'B' : false ? 'C' : 'D' : 'E';
console.log(result);//D answer