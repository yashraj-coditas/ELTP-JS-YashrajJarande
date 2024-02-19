const countriesFromFile = require("./countries_data");

// // Explain the difference between forEach, map, filter, and reduce.
const numbersArray = [1,2,3,4,5,6];
const byForEach = numbersArray.forEach(number => console.log(number*2));
console.log(byForEach);
const byMap = numbersArray.map(number => number+1);
console.log(byMap);
const byFilter = numbersArray.filter(number => number%2);
console.log(byFilter);
const byReduce = numbersArray.reduce((accumulator,currentValue) => accumulator*=currentValue);
console.log(byReduce);

// Define a callback function before you use it in forEach, map, filter or reduce.
const numberMultiplyBy2 = (number) => console.log(number*2);
const addition = (number) => number+1;
const modulus = (number) => number %2;
const accumulatedSum = (accumulator,currentValue) => accumulator*=currentValue;
const byForEachCallBack = numbersArray.forEach(numberMultiplyBy2);
const byMapCallBack = numbersArray.map(addition);
console.log(byMapCallBack);
const byFilterCallBack = numbersArray.filter(modulus);
console.log(byFilterCallBack);
const byReduceCallBack = numbersArray.reduce(accumulatedSum);
console.log(byReduceCallBack);
const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand','England']

// Use forEach to console.log each country in the countries array.
countries.forEach(country => console.log(country));

// Use forEach to console.log each name in the names array.
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
names.forEach(name => console.log(name));

// // Use forEach to console.log each number in the numbers array.
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
numbers.forEach(number => console.log(number));

// Use map to create a new array by changing each country to uppercase in the countries array.
const capitalisedCountries = countries.map(country => country.toUpperCase());
console.log(capitalisedCountries);

// Use map to create an array of countries length from countries array.
const lengthArray = countries.map(country => country.length); 
console.log(lengthArray);

// Use map to create a new array by changing each number to square in the numbers array
const squaredNumbers = numbers.map(number => number**2);
console.log(squaredNumbers);

// Use map to change to each name to uppercase in the names array
const capitalisedNames = names.map(name => name.toUpperCase());
console.log(capitalisedNames);

//Use map to map the products array to its corresponding prices.
const products = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]
const productPrices = products.map(product => Object.values(product));
console.log(productPrices);

// Use filter to filter out countries containing land.
const landCountries = countries.filter(country => country.toLowerCase().includes('land'));
console.log(landCountries);

// Use filter to filter out countries having six character.
const countriesOf6 = countries.filter(country => country.length===6)
console.log(countriesOf6);

// Use filter to filter out countries containing six letters and more in the country array.
const countriesOf6AndMore = countries.filter(country => country.length>=6)
console.log(countriesOf6AndMore);

// Use filter to filter out country start with 'E';
const countryStartWithE = countries.filter(country => country.startsWith('E'))
console.log(countryStartWithE);

// Use filter to filter out only prices with values.
const pricesWithValue = products.filter(({price}) => (price && price!==' '))
console.log(pricesWithValue);

// Use reduce to sum all the numbers in the numbers array.
const sumOfnumbers = numbers.reduce((accumulator,currentValue) => accumulator+=currentValue,0);
console.log(sumOfnumbers);

// Use reduce to concatenate all the countries and to produce this sentence: Estonia, Finland, Sweden, Denmark, Norway, and IceLand are north European countries

const concatenatedCountries = countries.reduce((accumulator, country, index) => {
  if (index === 0) {
    return accumulator + ', ' + country;
  } else if (index === countries.length - 1) {
    return accumulator + ', and ' + country;
  } else {
    return accumulator + ', ' + country;
  }
}, 'Estonia');
console.log(concatenatedCountries + ' are north European countries.');

// Explain the difference between some and every
const someHasLand = countries.some(country => country.toLowerCase().includes('land'));
console.log(someHasLand);
const everyHasLand = countries.every(country => country.toLowerCase().includes('land'));
console.log(everyHasLand);

// Use some to check if some names' length greater than seven in names array
const someLengthgt7 = countries.some(country => country.length>7);
console.log(someLengthgt7)

// Use every to check if all the countries contain the word land
const everyHasLandAgain = countries.every(country => country.toLowerCase().includes('land'));
console.log(everyHasLandAgain);

// Explain the difference between find and findIndex.
const findArray = [1,2,3,4,5];
const findTrial = findArray.find(number => number>3);
console.log(findTrial);
const findIndexTrial = findArray.findIndex(number => number>3);
console.log(findIndexTrial);

// Use find to find the first country containing only six letters in the countries array
const first6LengthCountry = countries.find(country => country.length===6);
console.log(first6LengthCountry);

// Use findIndex to find the position of the first country containing only six letters in the countries array
const index6LengthCountry = countries.findIndex(country => country.length===6);
console.log(index6LengthCountry);

// Use findIndex to find the position of Norway if it doesn't exist in the array you will get -1.
const norwayIndex = countries.findIndex(country => country.toLowerCase() === 'norway');
console.log(norwayIndex);

// Use findIndex to find the position of Russia if it doesn't exist in the array you will get -1.
const russiaIndex = countries.findIndex(country => country.toLowerCase() === 'russia')
console.log(russiaIndex);

// Find the total price of products by chaining two or more array iterators(eg. arr.map(callback).filter(callback).reduce(callback))
const totalPrice = products.map(({price}) => price).filter((price) => (price && price!==' ')).reduce((accumulator,currValue) => accumulator+=currValue);
console.log(totalPrice);
 const sumReduce = products.reduce((accumulator,{price})=> {
    if(parseInt(price))
        return accumulator+=price
    else
        return accumulator;
 },0
 );
console.log(sumReduce);

// Declare a function called categorizeCountries which returns an array of countries which have some common pattern(you find the countries array in this repository as countries.js(eg 'land', 'ia', 'island','stan')).
const categorizeCountries = (pattern) => {
    const commonCountries=[];
    for(country of countriesFromFile)
    {
        const {name} = country;
        if(name.toLowerCase().includes(`${pattern}`))
            commonCountries.push(name);
        
    }
    return commonCountries;
}

console.log(categorizeCountries('stan'));

// Create a function which return an array of objects, which is the letter and the number of times the letter use to start with a name of a country.
const countLetter = (countries) => 
{
    const freqCount ={}
    for(country of countries)
    {
        const name=country.name.toLowerCase();
        if(freqCount[name[0]])
        {
            
            freqCount[name[0]]++;
        }
        else
        {
            freqCount[name[0]] = 1;
        }
    }

    return freqCount
}
console.log(countLetter(countries));

// Declare a getFirstTenCountries function and return an array of ten countries. Use different functional programming to work on the countries.js array
const getFirstTenCountries =(countries) =>
{
    const result =[];
    let count = 0;
    for(const country of countries)
    {
        if(count >= 10)
          break;
        result.push(country);
        count++;
    
    }
    return result;
}
console.log(getFirstTenCountries(countries));

// Declare a getLastTenCountries function which which returns the last ten countries in the countries array.
const getLastTenCountries=(countries) =>
{
    const result =[];
    
    for(let index =countries.length-1 ; index >=countries.length-10;index--)
    {
        
        result.push(countries[index]);
        
    }
    return result;
}
console.log(getLastTenCountries(countries));

// Find out which letter is used many times as initial for a country name from the countries array (eg. Finland, Fiji, France etc)
const freqCount = countLetter(countries)
let maxFreq = -1,letter=''
for(const [key,value] of Object.entries(freqCount))
{
    if(value>maxFreq)
    {
        maxFreq = value;
        letter = key;
    }
}

console.log(letter);
// Use the countries information, in the data folder. Sort countries by name, by capital, by population
// Sort countries by name
const countriesByName = countries.slice().sort((a, b) => a.name.localeCompare(b.name));
console.log(countriesByName);

// Sort countries by capital
const countriesByCapital = countries.slice().sort((a, b) => a.capital.localeCompare(b.capital));
console.log(countriesByCapital);

// Sort countries by population
const countriesByPopulation = countries.slice().sort((a, b) => b.population - a.population);
console.log(countriesByPopulation);

// 35. Find the 10 most spoken languages:
const mostSpokenLanguages = (countries,count) => 
{
    const languagesFreq = {};
    for(const country of countries)
    {
        const newLanguages=country.languages;
        for( language of newLanguages)
        {
            if(languagesFreq[language.toLowerCase()])
                languagesFreq[language.toLowerCase()]++;
            else
                languagesFreq[language.toLowerCase()]=1;
        }
    }
    const sortedLanguages = Object.entries(languagesFreq)
        .sort((a, b) => b[1] - a[1]);

    const topLanguages = sortedLanguages.slice(0, count);

    const result = topLanguages.map(([language, count]) => ({ language, count }));
    return result;
}
 console.log(mostSpokenLanguages(countries, 10))
// // Your output should look like this
// console.log(mostSpokenLanguages(countries, 10))
// [
// {country: 'English',count:91},
// {country: 'French',count:45},
// {country: 'Arabic',count:25},
// {country: 'Spanish',count:24},
// {country:'Russian',count:9},
// {country:'Portuguese', count:9},
// {country:'Dutch',count:8},
// {country:'German',count:7},
// {country:'Chinese',count:5},
// {country:'Swahili',count:4}
// ]

// // Your output should look like this
// console.log(mostSpokenLanguages(countries, 3))
// [
// {country: 'English',count: 91},
// {country: 'French',count: 45},
// {country: 'Arabic',count: 25},
// ]```