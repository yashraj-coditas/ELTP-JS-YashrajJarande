
//   Iterate 0 to 10 using for loop, do the same using while and do while loop
for(let index = 0 ; index < 11;index++){
    console.log(index);
}
let storeNumber=0;
while(storeNumber<11){
    console.log(storeNumber);
    storeNumber++;
}
storeNumber=0;
do{
    console.log(storeNumber)
    storeNumber++;
}while(storeNumber<11)
//   Iterate 10 to 0 using for loop, do the same using while and do while loop
for(let index = 10 ; index >= 0;index--){
    console.log(index);
}
let reverseStoreNumber=10;
while(reverseStoreNumber>=0){
    console.log(reverseStoreNumber);
    reverseStoreNumber--;
}
reverseStoreNumber=10;
do{
    console.log(reverseStoreNumber)
    reverseStoreNumber--;
}while(reverseStoreNumber>=0)
//   Iterate 0 to n using for loop
let number = 18;
for(index=0;index<number;index++){
    console.log(index);
}
//   4. Write a loop that makes the following pattern using console.log():
//       #
//       ##
//       ###
//       ####
//       #####
//       ######
//       #######
for(let index = 0;index < 7;index++){
    console.log('#'.repeat(index));
}
//   5. Using loop print the following pattern
//    i    i^2   i^3
//    0    0     0
//    1    1     1
//    2    4     8
//    3    9     27
//    4    16    64
//    5    25    125
//    6    36    216
//    7    49    343
//    8    64    512
//    9    81    729
//    10   100   1000
for(let number = 0;number<11;number++){
    console.log(`${number} ${number**2} ${number**3}`);
}

//   5. Use for loop to iterate from 0 to 100 and print only even numbers
for(let number=0;number<101;number+=2){
    console.log(number);
}
//   6. Use for loop to iterate from 0 to 100 and print only odd numbers
for(let number=1;number<101;number+=2){
    console.log(number);
}
//   7. Use for loop to iterate from 0 to 100 and print only prime numbers
for (let number = 2; number <= 100; number++) {
    let isPrime = true;
    for (let factor = 2; factor <= Math.sqrt(number); factor++) {
        if (factor !==number && number % factor === 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime) {
        console.log(number);
    }
}
//   8. Use for loop to iterate from 0 to 100 and print the sum of all numbers.
let sumOfAll=0
for(let number=0;number<=100;number++){
     sumOfAll+=number;
}
console.log(sumOfAll);
//   9. Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.
let sumOfOdds=0,sumOfEven=0
for(let number=0;number<=100;number++){
    number%2 ? (sumOfOdds+=number) : (sumOfEven+=number);   
}
console.log(sumOfOdds);
console.log(sumOfEven);
//   10. Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds. //O/P:   [2550, 2500]
//   11. Develop a small script which generate array of 5 random numbers
    const arrayOfRandomNumbers=[];
        for(let index=0;index<5;index++){
            arrayOfRandomNumbers.push(Math.floor(Math.random()*10));
        }
    console.log(arrayOfRandomNumbers);
//   12. Develop a small script which generate array of 5 random numbers and the numbers must be unique
    const arrayOfUniqueRandomNumbers=[];
    while(arrayOfUniqueRandomNumbers.length < 5){
        randomNumber =Math.floor(Math.random()*10);
        if(!arrayOfUniqueRandomNumbers.includes(randomNumber))
                arrayOfUniqueRandomNumbers.push(randomNumber);
    }
    console.log(arrayOfUniqueRandomNumbers);
//   13. Develop a small script which generate a six characters random id: //iuyt56
const arrayRandomCharacters=[];
let randomCharacterNumber=0;
while(arrayRandomCharacters.length < 5){
    randomCharacterNumber = Math.floor(Math.random()*123);
    if(randomCharacterNumber<10) 
        arrayRandomCharacters.push(randomCharacterNumber);
    if ((randomCharacterNumber>=65 && randomCharacterNumber <=90) || (randomCharacterNumber>=97 && randomCharacterNumber <=122))
        arrayRandomCharacters.push(String.fromCharCode(randomCharacterNumber))
}
const randomString = arrayRandomCharacters.join('');
console.log(randomString);
//   14. Develop a small script which generate any number of characters random id.
const arrayCharacters=[];
let randomCharacterNumberGivenLength=0,givenLength=8;
while(arrayCharacters.length < givenLength){
    randomCharacterNumberGivenLength = Math.floor(Math.random()*123);
    if(randomCharacterNumberGivenLength<=10) 
        arrayCharacters.push(randomCharacterNumberGivenLength);
    else if((randomCharacterNumberGivenLength>=65 && randomCharacterNumberGivenLength <=90) || (randomCharacterNumberGivenLength>=97 && randomCharacterNumberGivenLength <=122))
        arrayCharacters.push(String.fromCharCode(randomCharacterNumberGivenLength))
}
const randomStringLength = arrayCharacters.join('');
console.log(randomStringLength);
//   15. Write a script which generates a random hexadecimal number.
const hexadecimalNumberLength = Math.floor(Math.random()*10);
const hexadecimalNumberArray =[];
let randomHexadecimalNumber= 0;
while(hexadecimalNumberArray.length<hexadecimalNumberLength){
    randomHexadecimalNumber = Math.floor(Math.random()*71);
    if(randomHexadecimalNumber <= 10)
        hexadecimalNumberArray.push(randomHexadecimalNumber);
    else if(randomHexadecimalNumber>=65 && randomHexadecimalNumber<=70)
        hexadecimalNumberArray.push(String.fromCharCode(randomHexadecimalNumber));
}
const storedHexadecimalNumber = hexadecimalNumberArray.join('');
console.log(storedHexadecimalNumber);
//   16. Using the above countries array, create the following new array.
//   ["ALBANIA", "BOLIVIA", "CANADA", "DENMARK", "ETHIOPIA", "FINLAND", "GERMANY", "HUNGARY", "IRELAND", "JAPAN", "KENYA"]
const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
  ]
  const capitalisedCountries=[];
  for(const country of countries){
    capitalisedCountries.push(country.toUpperCase());
  }
  console.log(capitalisedCountries);
//   17. Using the above countries array, create an array for countries length
//   [7, 7, 6, 7, 8, 7, 7, 7, 7, 5, 5]
const countriesLengthArray = [];
for(const country of countries){
    countriesLengthArray.push(country.length);
}
console.log(countriesLengthArray);   
//   18. Use the countries array to create the following array of arrays:
//     [
//     ['Albania', 'ALB', 7],
//     ['Bolivia', 'BOL', 7],
//     ['Canada', 'CAN', 6],
//     ['Denmark', 'DEN', 7],
//     ['Ethiopia', 'ETH', 8],
//     ['Finland', 'FIN', 7],
//     ['Germany', 'GER', 7],
//     ['Hungary', 'HUN', 7],
//     ['Ireland', 'IRE', 7],
//     ['Iceland', 'ICE', 7],
//     ['Japan', 'JAP', 5],
//     ['Kenya', 'KEN', 5]
//   ]
const countriesInfoArray=[];
for(const country of countries){
    countriesInfoArray.push([country,(country.slice(0,3)).toUpperCase(),country.length])
}
console.log(countriesInfoArray);
//   19. In above countries array, check if there is a country or countries containing the word 'land'. If there are countries containing 'land', print it as array. If there is no country containing the word 'land', print 'All these countries are without land'.
const countryHavingLand = [];
for(const country of countries){
    if(country.includes('land'))
        countryHavingLand.push(country);
}
countriesInfoArray.length ? console.log(countryHavingLand):console.log('All these countries are without land');

  ['Finland','Ireland', 'Iceland']
//   20. Using the above countries array, find the country containing the biggest number of characters.
let maximumCountryLength=Number.MIN_VALUE,maximumCountry=0;
for(const country of countries){
    if(country.length > maximumCountryLength){
        maximumCountryLength = country.length;
        maximumCountry=country;
    }
        
}
console.log(maximumCountry);
//   21. Using the above countries array, find the country containing only 5 characters.

for(const country of countries){
    if(country.length === 5)
        console.log(country);
}
 

  
  const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
  ]
//   22. Find the longest word in the webTechs array.
let largestWord , largestWordlength=Number.MIN_VALUE;
for(technology of webTechs){
    if(technology.length > largestWordlength){
        largestWordlength = technology.length;
        largestWord = technology
    }
}
console.log(largestword)
//   23. Use the webTechs array to create the following array of arrays:
//   [["HTML", 4], ["CSS", 3],["JavaScript", 10],["React", 5],["Redux", 5],["Node", 4],["MongoDB", 7]]
const webTechsLengthArray=[];
for(const technology of webTechs){
    webTechsLengthArray.push([technology,technology.length]);
}
console.log(webTechsLengthArray);

  const mernStack = ['MongoDB', 'Express', 'React', 'Node']
//   24. An application created using MongoDB, Express, React and Node is called a MERN stack app. Create the acronym MERN by using the array mernStack
let mern='';
for(const technology of mernStack){
    mern += technology[0];
}
console.log(mern);
//   25. Iterate through the array, ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"] using a for loop or for of loop and print out the items.
const skillsArray = ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"];
for(const technology of skillsArray){
    console.log(technology);
}
//   26. This is a fruit array , ['banana', 'orange', 'mango', 'lemon'] reverse the order using loop without using a reverse method.
const reversedFruitArray = [];
const fruits = ['banana', 'orange', 'mango', 'lemon'];
for(const fruit of fruits){
    reversedFruitArray.unshift(fruit);
}
console.log(reversedFruitArray);
//   27. Print all the elements of array as shown below.
    const fullStack = [
      ['HTML', 'CSS', 'JS', 'React'],
      ['Node', 'Express', 'MongoDB']
    ]
const flatFullStack = fullStack.flat();
for(const technology of flatFullStack){
    console.log(technology);
}
//   OUTPUT: 
  
//     HTML
//     CSS
//     JS
//     REACT
//     NODE
//     EXPRESS
//     MONGODB


