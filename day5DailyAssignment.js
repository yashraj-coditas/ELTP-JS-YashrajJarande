// Declare a variable and assign a value 'Easy JavaScript Assignments'.
const testVariable = 'Easy JavaScript Assignments';

// Print the length of the string.
console.log(testVariable.length);

// Change all the string characters to capital letters using toUpperCase() method
const upperCase = testVariable.toUpperCase();
console.log(upperCase);

// Change all the string characters to lowercase letters using toLowerCase() method
const lowerCase = testVariable.toLowerCase();
console.log(lowerCase);

// Slice out the first word of the string using substr() and substring() method
console.log(testVariable.substr(5,11));
console.log(testVariable.substring(5,testVariable.length));

// Slice out the phrase JavaScript Assignments from 'Easy JavaScript Assignments'..
console.log(testVariable.slice(0,4));

// Check if the string contains a word Script using includes() method
console.log(testVariable.includes("Script"));

// Split the string into an array using split() method
console.log(testVariable.split());

// Split the string 'Easy JavaScript Assignments' at the space using split() method
console.log(testVariable.split(' '));

// 'ELTP, BATCH, THREE' split the string at the comma and change it to an array.
const newSplit = 'ELTP, BATCH, THREE';
console.log(newSplit.split(','));

// Change 'Easy JavaScript Assignments' to 'Easy Python Assignments' using replace() method.
console.log(testVariable.replace('JavaScript','Python'));

// What is character at index 20 in 'Easy JavaScript Assignments' string? Use charAt() method.
console.log(testVariable.charAt(20));

// What is the character code of J in 'Easy JavaScript Assignments' string using charCodeAt()
console.log(testVariable.charCodeAt('J'));

// Use indexOf to determine the position of the first occurrence of 'a' in 'Easy JavaScript Assignments'
console.log(testVariable.indexOf('a'));

// Use lastIndexOf to determine the position of the last occurrence of 'a' in 'Easy JavaScript Assignments'.
console.log(testVariable.lastIndexOf('a'));

// Use indexOf to find the position of the first occurrence of the word 'Easy' in the following sentence:'Easy JavaScript Assignments, Easy Easy'
const easyString = 'Easy JavaScript Assignments, Easy Easy';
console.log(easyString.indexOf('Easy'));

// Use lastIndexOf to find the position of the last occurrence of the word 'Easy' in the following sentence:'Easy JavaScript Assignments, Easy Easy'
console.log(easyString.lastIndexOf('Easy'));

// Use search to find the position of the first occurrence of the word 'Easy' in the following sentence: 'Easy JavaScript Assignments, Easy Easy'
console.log(easyString.search('Easy'));

// Use trim() to remove any trailing whitespace at the beginning and the end of a string. '       Easy JavaScript Assignments, Easy Easy             '
console.log(easyString.trim());

// Use startsWith() method with the string 'Easy JavaScript Assignments' and make the result true
console.log(easyString.startsWith('Easy'));

// Use endsWith() method with the string 'Easy JavaScript Assignments' and make the result true
console.log(easyString.endsWith('Easy'));

// Use match() method to find all the a’s in 'Easy JavaScript Assignments'
console.log(easyString.match(/a/g));

// Use concat() and merge 'Easy' and 'JavaScript' to a single string.
const easyWord = 'Easy';
console.log(easyWord.concat('Javascript'));

// Use repeat() method to print 'Easy JavaScript' 3 times.
const easyJavascript= 'Easy Javascript';
console.log(easyJavascript.repeat(3));

// 'Javascript is Easy, too Easy, too Easy, Easy to learn' Count the number of word 'Easy' in this sentence.
let countEasyOld='Javascript is Easy, too Easy, too Easy, Easy to learn';
countEasyOld = countEasyOld.replaceAll(',','');
const arrayCountEasy = countEasyOld.split(" ");

let count=0;
for(let traverse=0;traverse<countEasyOld.length;traverse++){
    if(arrayCountEasy[traverse]==='Easy'){
        count+=1;
    }
}
console.log(count);

// Use match() to count the number of all 'Easy' in the following sentence:'Javascript is Easy, too Easy, too Easy, Easy to learn'
const tooEasy = 'Javascript is Easy, too Easy, too Easy, Easy to learn';
const countEasy = (tooEasy.match(/Easy/g)).length;
console.log(countEasy);

// Clean the following text and find the most frequent word (hint, use replace and regular expressions).
//     const sentence = '%I $am@% a %softwa@r%e %e@ngineer, &and& %java@sc@ript% is Ea%s#y;
const sentence = '%I $am@% a %softwa@r%e %e@ngineer, &and& %java@sc@ript% is Ea%s#y';
console.log(sentence.replace(/[^\w\s]/gi,""));

// 28. Calculate the total annual income of the person by extracting the numbers from the following text.
// 'I earn 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro from freelancing, and 50000 euro from trading'
const salary = 'I earn 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro from freelancing, and 50000 euro from trading';
const salaryArray = salary.split(' ');
let totalIncome=0;
for(traverse=0;traverse<salaryArray.length;traverse++){
    if(isNaN(salaryArray[traverse]) === false){
        if(salaryArray[traverse] == 5000)
            totalIncome = (5000*12) + totalIncome;
        else
            totalIncome = parseInt(salaryArray[traverse]) + totalIncome;
    }
}
console.log(totalIncome);


// 27
// EASY JAVASCRIPT ASSIGNMENTS
// easy javascript assignments
// JavaScript
// JavaScript Assignments
// Easy
// true
// [ 'Easy JavaScript Assignments' ]
// [ 'Easy', 'JavaScript', 'Assignments' ]
// [ 'ELTP', ' BATCH', ' THREE' ]
// Easy Python Assignments
// g
// 69
// 1
// 8
// 0
// 34
// 0
// Easy JavaScript Assignments, Easy Easy
// true
// true
// [ 'a', 'a', 'a', 'a', 'a' ]
// EasyJavascript
// Easy JavascriptEasy JavascriptEasy Javascript
// 4
// 4
// I am a software engineer and javascript is Easy
// 135000