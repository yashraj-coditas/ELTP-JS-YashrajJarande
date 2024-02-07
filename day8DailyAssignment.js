// Declare an empty array;
const emptyArray = [];

// Declare an array with more than 5 number of elements
const arrayMoreThanFiveElements=[1,2,3,4,5,6,7,8,9];

// Find the length of your array
console.log(arrayMoreThanFiveElements.length);

// Get the first item, the middle item and the last item of the array
console.log(arrayMoreThanFiveElements[0],arrayMoreThanFiveElements[Math.floor(arrayMoreThanFiveElements.length/2)],arrayMoreThanFiveElements[arrayMoreThanFiveElements.length-1])

// Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5
const mixedDataTypes =['abc',1,3,[5,6],{married : 'yes'},'yashraj'];
console.log(mixedDataTypes.length);

// Declare an array variable name itCompanies and assign initial values Coditas, Google, Microsoft, Apple, IBM, Oracle and Amazon
const  itCompanies = ['Coditas','Google','Microsoft','Apple','IBM','Oracle','Amazon'];

// Print the array using console.log()
console.log(itCompanies);

// Print the number of companies in the array
console.log(itCompanies.length);

// Print the first company, middle and last company
console.log(itCompanies[0],itCompanies[Math.floor(itCompanies.length/2)],itCompanies[itCompanies.length-1]);

// Print out each company
let companyArrayIterator;
for(companyArrayIterator=0;companyArrayIterator<itCompanies.length;companyArrayIterator++){
    console.log(itCompanies[companyArrayIterator]);
}

// Change each company name to uppercase one by one and print them out
for(companyArrayIterator=0;companyArrayIterator<itCompanies.length;companyArrayIterator++){
    console.log(itCompanies[companyArrayIterator].toUpperCase());
}

// Print the array like as a sentence: Coditas, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
console.log(`${itCompanies.join(',')} are big IT companies`);

// Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found
const companyExists = 'IBM';
if(itCompanies.indexOf(companyExists) === -1)
    console.log('Comapany not present');
else
    console.log(`${companyExists}`);

// Filter out companies which have more than one 'o' without the filter method
for(i=0;i<itCompanies.length;i++){
    const temporaryArray = itCompanies[i].split("o");
    if(temporaryArray.length > 2 )
         console.log(itCompanies[i]); 
}

// Sort the array using sort() method
console.log(itCompanies.sort());

// Sort the array by country name length without sort;
for(let index=0;index<itCompanies.length-1;index++){
    for(let counter=0;counter<itCompanies.length-index-1;counter++){
        let temporaryStorage;
        if(itCompanies[counter].length>itCompanies[counter+1].length){
            temporaryStorage=itCompanies[counter];
            itCompanies[counter]=itCompanies[counter+1];
            itCompanies[counter+1]=temporaryStorage;
        }
    }
}
console.log(itCompanies);

// Reverse the array using reverse() method
console.log(itCompanies.reverse());

// Slice out the first 3 companies from the array
console.log(itCompanies.slice(0,3));

// Slice out the last 3 companies from the array
console.log(itCompanies.slice(-3,itCompanies.length));

// Slice out the middle IT company or companies from the array
itCompanies.length%2?console.log(itCompanies.slice(Math.floor(itCompanies.length/2),Math.floor(itCompanies.length/2)+1)):
console.log(itCompanies.slice(Math.floor(itCompanies.length/2),Math.floor(itCompanies.length/2)+2));


// Remove the first IT company from the array
itCompanies.splice(0,1)
console.log(itCompanies);

// Remove the middle IT company or companies from the array
itCompanies.length%2?itCompanies.splice(Math.floor(itCompanies.length/2),1):itCompanies.splice(Math.floor(itCompanies.length/2),2);
console.log(itCompanies);

// Remove the last IT company from the array
itCompanies.splice(itCompanies.length-1,1)
console.log(itCompanies);

// Remove all IT companies
itCompanies.splice(0)
console.log(itCompanies);

// 24. First remove all the punctuations and change the string to array and count the number of words in the array, dont use regex
let text ='I love teaching and empowering people. I teach HTML, CSS, JS, Node, Python, dJango'
const punctuations = [",", "."];
for (let i = 0; i < punctuations.length; i++) {
    text = text.split(punctuations[i]).join("");
}
const words = text.split(" ");
console.log(words.length);

// 25. In the following shopping cart add, remove, edit items
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];

// add 'Rasmalai' in the beginning of your shopping cart if it has not been already added
shoppingCart.unshift('Rasmalai');

// add Gulabjamun at the end of you shopping cart if it has not been already added
shoppingCart.push('Gulabjamun');

// remove 'Honey' if you are allergic to honey
shoppingCart.splice(shoppingCart.indexOf('Honey'),1);

// modify Tea to 'Green Tea'
shoppingCart[shoppingCart.indexOf('Tea')] = 'Green Tea'
console.log(shoppingCart);

// 26. In countries array check if 'India' exists in the array if it exists print 'INDIA'. If it does not exist add to the countries list.
//const countries =['Africa','Australia','Japan'];
const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'India',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan'
   
  ]
countries.includes('India') ? console.log("INDIA") : countries.push('India');
console.log(countries);

// 27. In the webTechs array check if Sass exists in the array and if it exists print 'Sass is a CSS preprocess'. If it does not exist add Sass to the array and print the array.
//const webTechs = ['Paas','Iaas','IaC'] 
const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
  ]
webTechs.includes('Saas') ? console.log('Saas is a CSS presprocess') : webTechs.push('Saas');
console.log(webTechs);

// 28. Concatenate the following two variables and store it in a fullStack variable.
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node','Express', 'MongoDB']
const fullStack = frontEnd + backEnd;
console.log(fullStack)

// 29. The following is an array of 10 students ages:
const ages = [19, 22, 19, 28, 20, 25, 26, 28, 25, 28];

// Sort the array and find the min and max age
console.log(ages.sort());
console.log('Min = '+ ages[0] , 'Max = ' + ages[ages.length-1]);

// Find the median age(one middle item or two middle items divided by two)
ages.length%2 ? console.log(ages[Math.floor(ages.length/2)]) : (console.log(ages[(Math.floor((ages.length-1)/2))],ages[Math.ceil((ages.length)/2)])) 

// Find the average age(all items divided by number of items)
let average = 0,sum=0;
for(counter=0;counter<ages.length;counter++){
    sum += ages[counter];
}
average = sum/ages.length;
console.log(average);

// Find the range of the ages(max minus min)
console.log(ages[ages.length-1]-ages[0]);

// Compare the value of (min - average) and (max - average), use abs() method 1.Slice the first ten countries from the countries array
Math.abs((ages[0] - average) > (ages[ages.length-1] - average)? console.log('Min-average is greater'):console.log('Max-average is greater')) ;

//1.Slice the first ten countries from the countries array
console.log(countries.slice(0,10));

// 30. Find the middle countries in the countries array.
countries.length%2 ? console.log(countries[Math.floor(countries.length/2)]) : (console.log(countries[(Math.floor((countries.length-1)/2))],countries[Math.ceil((countries.length)/2)])) 

// 31. Divide the countries array into two equal arrays if it is even. If countries array is not even , one more country for the first half
if(countries.length%2){
    sliced = countries.slice(0,Math.floor(countries.length/2));
    sliced.push('China');
    console.log(sliced);
    console.log(countries.slice(Math.floor(countries.length/2),countries.length))
}
else
{
    console.log(countries.slice(0,countries.length/2) , countries.slice(countries.length/2,countries.length))
}


