// const PI=3.14;
// PI=8;
// console.log(PI); //javascript being interepreted language erors are shown in run time
// //even in loops dont use i,j,k use meaningful names

console.log(fullName)//var can be hoisted
var fullName = 'Yashraj Jarande';
var fullName = 'Rahul Sharma'; //var can be redeclared
let firstName = 'Yashraj'; //let and const cannot be redeclared
function callLastName(){
    if (firstName === 'Yashraj'){
        let lastName = 'Sharma' 
        var lastNameVar = 'Kohli'
        console.log(lastName) //let decalred here is only accessible in the if scope
    }
    console.log(lastNameVar) //var on the other hand is accessible in the functional scope
}
callLastName();
console.log(fullName);