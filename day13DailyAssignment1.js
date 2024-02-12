// Create an empty object called cow
const cow ={};

// Print the the cow object on the console
console.log(cow);

// Add name, legs, color, age and sound properties for the cow object. The sound property is a method which return "maaah maaah"
cow.name = 'Rambhaaa';
cow.legs = 4;
cow.age = 4;
cow.color = 'White';

cow.sound  = () => 'maaah maaah';
 
// const { name = 'Rambhaaa', legs = 4, age = 4, color = 'White', sound = () => "maaah maaah" } = cow;
console.log(cow);  

// Get name, legs, color, age and sound value from the cow object
const {name} = cow;
console.log(name);
const {legs} = cow;
console.log(legs);
const {color} = cow;
console.log(color);
const {age} = cow;
console.log(age);
const {sound} = cow;
console.log(sound());

// Set new properties the cow object: breed, getCowInfo()
cow.breed='Indian';
cow.getCowInfo = () => {return{...cow}};

const {getCowInfo} = cow;
console.log(getCowInfo());

// Dummy Data-1
const users = {
  Alex: {
    email: 'alex@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript'],
    age: 20,
    isLoggedIn: false,
    points: 30
  },
  Asab: {
    email: 'asab@asab.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
    age: 25,
    isLoggedIn: false,
    points: 50
  },
  Brook: {
    email: 'daniel@daniel.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
    age: 30,
    isLoggedIn: true,
    points: 50
  },
  Daniel: {
    email: 'daniel@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
    age: 20,
    isLoggedIn: false,
    points: 40
  },
  John: {
    email: 'john@john.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
    age: 20,
    isLoggedIn: true,
    points: 50
  },
  Thomas: {
    email: 'thomas@thomas.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React'],
    age: 20,
    isLoggedIn: false,
    points: 40
  },
  Paul: {
    email: 'paul@paul.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
    age: 20,
    isLoggedIn: false,
    points: 40
  }
}

// Find the person who has many skills in the users object.

let temporaryMaxSkills=Number.MIN_VALUE,personWithMaxSkills;
for (const key of Object.keys(users)) {
    const{skills} = users[key];
    if(skills.length > temporaryMaxSkills){
        temporaryMaxSkills = skills.length;
        personWithMaxSkills = key;
    }
}
console.log(`Person with maximum skills is ${personWithMaxSkills}`);

// Count logged in users.
let isLoggedInCounter=0;
for(const key of Object.keys(users)){
    const {isLoggedIn} = users[key];
    if(isLoggedIn) 
        isLoggedInCounter++; 
}
console.log(`Currently Logged in users is/are ${isLoggedInCounter}`);

//  count users having greater than equal to 30 points from the following object.
let pointsCounter=0;
for(const key of Object.keys(users)){
    const {points} = users[key];
    if(points >= 30)
        pointsCounter++;   
}
console.log(`Users having points greater than equal to 30 is/are ${pointsCounter}`);

// Find people who are MERN stack developer from the users object
for(const key of Object.keys(users)){
    const{skills} = users[key];
    if(skills.includes('MongoDB')&&skills.includes('Express')&&skills.includes('Node')&&skills.includes('React'))
        console.log(key)
}
// Set your name in the users object without modifying the original users object
const updatedUsers = JSON.parse(JSON.stringify(users));
updatedUsers.Yashraj = {
    email: 'yashraj@yashraj.com',
skills: ['HTML', 'CSS', 'JavaScript', 'React'],
age: 22,
isLoggedIn: true,
points: 40
}
console.log(updatedUsers);

// Get all keys or properties of users object
console.log(Object.keys(updatedUsers));
// Get all the values of users object
console.log(Object.values(updatedUsers));
// Use the countries object to print a country name, capital, populations and languages.
const countries ={
  USA: {
    name: "United States of America",
    capital: "Washington D.C.",
    population: 331002651,
    languages: ["English"]
},
China: {
    name: "China",
    capital: "Beijing",
    population: 1439323776,
    languages: ["Mandarin"]
}
}
for(const [key,value] of Object.entries(countries))
{
   const {capital} = value, {population} = value,{languages} = value;
   console.log(`country name:${key}, capital:${capital}, population:${population} and languages:${languages}`);
}
// Create an object called personAccount. It has firstName, lastName, incomes, expenses properties and it has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance methods. Incomes is a set of incomes and its description and expenses is a set of incomes and its description.
const personAccount ={
  firsName : "yashraj",
  lastName : "jarande",
  incomes:{
        salary : 50000,
        otherIncomes : 23400
  },
  expenses :{
      rent : 11500,
      shopping : 5200
  },
  totalIncome : function()
  {
     const {incomes} =personAccount;
     let sumIncomes = 0;
     for( const income of Object.values(incomes))
     {
        sumIncomes+=income;
     }
     return sumIncomes;
  },
  totalExpense : function()
  {
    const {expenses} =personAccount;
    let sumOfAllExpenses = 0;
    for( const expense of Object.values(expenses))
    {
      sumOfAllExpenses+=expense;
    }
    return sumOfAllExpenses;
  },
  addIncome : function(description,income)
  {
    const {incomes} =personAccount;
    incomes[description]=income;
  },
  addExpense : function(description,expense)
  {
    const {expenses} =personAccount;
    expenses[description]=expense;
  },
  accountBalance : function()
  {
     return this.totalIncome()-this.totalExpense();
  }
}
console.log(personAccount.totalIncome());
console.log(personAccount.totalExpense());
personAccount.addIncome("OverTime",1320);
personAccount.addExpense("shoes",3000);
console.log(personAccount);
console.log(personAccount.accountBalance());
// Imagine you are getting the below users array of objects.
// Dummy Data-2
    const usersDummy2 = [
    {
        _id: 'ab12ex',
        username: 'Alex',
        email: 'alex@alex.com',
        password: '123123',
        createdAt:'08/01/2020 9:00 AM',
        isLoggedIn: false
    },
    {
        _id: 'fg12cy',
        username: 'Asab',
        email: 'asab@asab.com',
        password: '123456',
        createdAt:'08/01/2020 9:30 AM',
        isLoggedIn: true
    },
    {
        _id: 'zwf8md',
        username: 'Brook',
        email: 'brook@brook.com',
        password: '123111',
        createdAt:'08/01/2020 9:45 AM',
        isLoggedIn: true
    },
    {
        _id: 'eefamr',
        username: 'Martha',
        email: 'martha@martha.com',
        password: '123222',
        createdAt:'08/01/2020 9:50 AM',
        isLoggedIn: false
    },
    {
        _id: 'ghderc',
        username: 'Thomas',
        email: 'thomas@thomas.com',
        password: '123333',
        createdAt:'08/01/2020 10:00 AM',
        isLoggedIn: false
    }
    ];

// Create a function called signUp which allows user to add to the collection. If user exists, inform the user that he has already an account.
// Create a function called signIn which allows user to sign in to the application
// The products array has three elements and each of them has six properties.
const products = [
    {
      _id: 'eedfcf',
      name: 'mobile phone',
      description: 'Huawei Honor',
      price: 200,
      ratings: [
        { userId: 'fg12cy', rate: 5 },
        { userId: 'zwf8md', rate: 4.5 }
      ],
      likes: []
    },
    {
      _id: 'aegfal',
      name: 'Laptop',
      description: 'MacPro: System Darwin',
      price: 2500,
      ratings: [],
      likes: ['fg12cy']
    },
    {
      _id: 'hedfcg',
      name: 'TV',
      description: 'Smart TV:Procaster',
      price: 400,
      ratings: [{ userId: 'fg12cy', rate: 5 }],
      likes: ['fg12cy']
    }
  ]
// Create a function called rateProduct which rates the product
// function rateProduct(productName,productUserId,productRating){
//   for(index=0;index<products.length;index++){
//     const {name} = products[index]
//       if( name === productName){
//         products[index].ratings.push({productUserId,productRating});
//         console.log(products[index].ratings);
//       }
//   }  
// }
function rateProduct(productName,productUserId,productRating){
  for(const product of products){
    const {name} = product;
    if(name === productName){
      const {ratings} = product;
      ratings.push({productUserId,productRating});
      console.log(ratings);
    }
  }
}
rateProduct('TV','aj34vdj',4);

// Create a function called averageRating which calculate the average rating of a product
// let totalaverage = 0;
// function averageRating(productName){
//   for(let index=0;index<products.length;index++){
//     const {name} = products[index]
//     if(name === productName){
//        for(indexIterate =0; indexIterate < products[index].ratings.length ; indexIterate ++){
//         totalaverage += products[index].ratings[indexIterate].rate;
        
//        }
//        console.log(totalaverage/products[index].ratings.length);
//     }
//   }
// }

function averageRating(productName){

  for(const product of products){
    const {name} = product;
    if(name === productName){
      let totalaverage=0;
      const {ratings} = product;
      for(const {rate} of ratings){
        totalaverage += rate;
      }
      console.log(totalaverage/ratings.length);
      return 0;
    }
  }
}
averageRating('mobile phone');
// Create a function called likeProduct. This function will helps to like to the product if it is not liked and remove like if it was liked.
// function likeProduct(productName,likeMessage){
//   for(let index=0 ; index < products.length ;index++){
//     const {name} = products[index]
//     if(name === productName){
//       console.log(products[index].likes)
//       // const {likes} = product
//       if(products[index].likes.length !== 0){
//         console.log('inside true')
//         products[index].likes.pop();
//       }
//       else{
//         console.log('inside false')
//         products[index].likes.push(likeMessage);
//       }
//       console.log(products[index].likes);
//     }
//   }
// }

function likeProduct(productName,likeMessage){
  for(const product of products){
    const {name}=product;
    if(name===productName){
      const {likes}=product;
      if(likes.length !== 0){
                console.log('inside true')
                likes.pop();
              }
              else{
                console.log('inside false')
                likes.push(likeMessage);
              }
              console.log(likes);
    }
  }
}
likeProduct('mobile phone','abdaa12');
