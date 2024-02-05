// Check if typeof '10' is exactly equal to 10. If not make it exactly equal.
const typetoCheck = '10';
console.log(typeof(typetoCheck) === typeof(10));
const toNumber = parseInt(typetoCheck);
console.log(typeof(toNumber) === typeof(10));

// Check if parseFloat('9.8') is equal to 10 if not make it exactly equal with 10.
const floatNumber = parseFloat('9.8');
if(floatNumber === 10){
    console.log("Equal");
}
else
console.log("Not equal");
// to make thrm equal
const equalFloatNumber = Math.round(floatNumber);
if(equalFloatNumber === 10){
    console.log("Equal");
}
else
console.log("Not equal");

// Generate a random number between 0 and 100 inclusively.
function generateRandomNumber0to100(){
    const numberin0and100 = Math.floor(Math.random()*101);

    console.log(numberin0and100);
}
generateRandomNumber0to100();

// Generate a random number between 50 and 100 inclusively.
function generateRandomNumber50to100(){
    const numberin50and100 = Math.floor((Math.random()*51 + 50));

    console.log(numberin50and100);
}
generateRandomNumber50to100();

// Use console.log() and escape characters to print the following pattern.
// 1 1 1 1 1
// 2 1 2 4 8
// 3 1 3 9 27
// 4 1 4 16 64
// 5 1 5 25 125
let loopVariable;
for(loopVariable=1;loopVariable<6;loopVariable++)
{
    console.log(`${loopVariable} ${1} ${loopVariable} ${Math.pow(loopVariable,2)} ${Math.pow(loopVariable,3)}`);
}

// Enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h.
function calculateArea(base,height){
    const area = 0.5 * base * height;
    console.log(area);
}
calculateArea(10,20);
