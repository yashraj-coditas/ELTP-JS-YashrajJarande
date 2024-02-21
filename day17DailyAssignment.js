const countriesAPI = 'https://restcountries.com/v2/all'
const catsAPI = 'https://api.thecatapi.com/v1/breeds'

//Read the countries API using fetch and print the name of country, capital, languages, population and area.
const countriesPromise =new Promise((resolve,reject) =>{
    fetch(countriesAPI)
    .then((response)=>{
        if(!response.ok)
           throw new Error("Data fetch failed");
        return response.json();
    })
    .then((data) => resolve(data))
    .catch((error) => reject(error))
})
 
countriesPromise.
then((countries) => {
    for(country of countries)
    {
        const {name}=country,{capital}=country,{languages} = country,{area}=country,{population}=country;
        console.log(`name:${name} , capital:${capital} , languages:${languages} , population:${population} , area:${area}`)
    }
})
.catch((error) => console.log(error))
// Print out all the cat names in to catNames variable.
const cat =new Promise((resolve,reject) =>{
    fetch(catsAPI)
    .then((response)=>{
        if(!response.ok)
           throw new Error("Data fetch failed");
        return response.json();
    })
    .then((data) => resolve(data))
    .catch((error) => reject(error))
})

cat.
then((cats) => {
    for(newCat of cats)
    {
        const {name}=newCat;
        console.log(`Cat name:${name} `)
    }
})
.catch((error) => console.log(error))

// Read the cats api and find the average weight of cat in metric unit.

const weight =new Promise((resolve,reject) =>{
    fetch(catsAPI)
    .then((response)=>{
        if(!response.ok)
           throw new Error("Data fetch failed");
        return response.json();
    })
    .then((data) => resolve(data))
    .catch((error) => reject(error))
})
 
weight.
then((cats) => {
    for(newCat of cats)
    {
        const {weight:{metric}}= newCat;
        const avg=(parseInt(metric[0])+parseInt(metric[metric.length-1]))/2;
        console.log(`Cat weight:${avg} `)
    }
})
.catch((error) => console.log(error))

//Read the countries api and find out the 10 largest countries
const largestCountries =new Promise((resolve,reject) =>{
    fetch(countriesAPI)
    .then((response)=>{
        if(!response.ok)
           throw new Error("Data fetch from API failed");
        return response.json();
    })
    .then((data) => resolve(data))
    .catch((error) => reject(error))
})
 largestCountries.
then((countries) => {
    console.log(countries);
    const countriesArea ={}
    for(country of countries)
    {
        const {name} = country;
        const {area} = country;
        countriesArea[name]=area;
    }
    const sortedCountriesArea = Object.entries(countriesArea).sort((a,b)=> b[1]-a[1]);
    console.log(sortedCountriesArea.slice(0,10));
})
.catch((error) => console.log(error))

// Read the countries api and count total number of languages in the world used as officials.
// const countriesInfo =new Promise((resolve,reject) =>{
//     fetch(countriesAPI)
//     .then((response)=>{
//         if(!response.ok)
//            throw new Error("Data fetch from API failed");
//         return response.json();
//     })
//     .then((data) => resolve(data))
//     .catch((error) => reject(error))
// })
//  countriesInfo.
// then((countries) => {
    
//         const {languages} = countries[0]
//         console.log(languages); 
    
    
// })
// .catch((error) => console.log(error))