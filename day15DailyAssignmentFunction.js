// An area of a rectangle is calculated as follows: area = length x width. Write a function which calculates areaOfRectangle.
const areaOfRectangle = (length,width) => length*width;
console.log(areaOfRectangle(4,3));
// Write a function called checkSeason, it takes a month parameter and returns the season:Autumn, Winter, Spring or Summer.
const checkSeason = (month) => {
    switch(month){
        case 'december':
        case 'november':
        case 'january':
        case 'february':
            return 'Winter'
        case 'march':
            return 'Spring';
        case 'april':
        case 'may':
        case 'june':
            return 'Summer'
        case 'october':
            return 'Autumn'
        default:
            return 'Wrong Input'
    }
}
console.log(checkSeason('April'.toLowerCase()));
// Write a function findMax that takes three arguments and returns their maximum with out using Math.max method.
const findMax =(number1,number2,number3) => {
    if(number1 > number2 && number1 > number3)
    return number1;
else if(number2 > number1 && number2 > number3)
    return number2;
else
    return number3;
}
console.log(findMax(0, 10, 5))
console.log(findMax(0, -10, -2))

// 4. Declare a function name swapValues. This function swaps value of x to y.
const swappedXandY={};
const swapValues = (xAndY) =>
{

   const  {x:variableX} = xAndY;
   const {y:variableY} = xAndY;
    swappedXandY.x = variableY;
    swappedXandY.y = variableX
    return swappedXandY
}
const xAndY = {x:34 , y:43}
console.log(swapValues(xAndY));

// 5. Write a function generateColors which can generate any number of hexa or rgb colors.

const generateColors = (color, number) =>{
    switch(color){
        case 'hexa' :
        const hexadecimalDigits =[0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f'];
        const hexColorsArray =[];
        for(let iteration = 0; iteration< number; iteration++)
        {
            let hexColor ='#';
        for (let index = 0; index< 6; index++) {
            hexColor += hexadecimalDigits[Math.floor(Math.random() * 16)];
        }
        hexColorsArray.push(hexColor);
    }
           return hexColorsArray;
        
        case 'rgb' :
        const rgbColorsArray=[];
        for(let iteration = 0; iteration< number; iteration++)
        {
            let rgbColor ='rgb(';
        for (let index = 0; index< 2; index++) {
            rgbColor += (Math.floor(Math.random() * 256)).toString();
            rgbColor+=',';
        }
            rgbColor += (Math.floor(Math.random() * 256)).toString();
            rgbColor+=')'
            rgbColorsArray.push(rgbColor);
        }
        return rgbColorsArray;
    }
    
    }
console.log(generateColors('hexa', 3)) // ['#a3e12f', '#03ed55', '#eb3d2b']
console.log(generateColors('hexa', 1)) // '#b334ef'
console.log(generateColors('rgb', 3)) // ['rgb(5, 55, 175)', 'rgb(50, 105, 100)', 'rgb(15, 26, 80)']
console.log(generateColors('rgb', 1)) // 'rgb(33,79, 176)'

// 6. Write a function called modifyArray takes array as parameter and modifies the fifth item of the array and return the array. If the array length is less than five it return 'item not found'.
// console.log(modifyArray(['Avocado', 'Tomato', 'Potato','Mango', 'Lemon','Carrot']);
const fruits = ['Avocado', 'Tomato', 'Potato','Mango', 'LEMON', 'Carrot']
const modifyArray = (fruits) =>{
    if(fruits.length <5)
       return 'item not found';
    else
    {
        fruits[4]=fruits[4].toUpperCase();
        return fruits;
    }
}
console.log(fruits);
// 7. Write a functions which checks if all items are unique in the array.
const uniqueArray = (numbers) =>{
    const numbersArray=[];
    for(number of numbers)
    {
        if(numbersArray.includes(number))
            return false;
        else
            numbersArray.push(number);
    }
    return true;
}
console.log(uniqueArray([1,2,1,4,5,6]));
// 8. Write a function which returns array of seven random numbers in a range of 0-9. All the numbers must be unique.
// sevenRandomNumbers()
// [(1, 4, 5, 7, 9, 8, 0)]
const sevenRandomNumbers = () => {
    const arrayOfUniqueRandomNumbers=[];
while(arrayOfUniqueRandomNumbers.length < 7){
    randomNumber =Math.floor(Math.random()*10);
    if(!arrayOfUniqueRandomNumbers.includes(randomNumber))
            arrayOfUniqueRandomNumbers.push(randomNumber);
}
return arrayOfUniqueRandomNumbers;
}
console.log(sevenRandomNumbers());