// Check if type of '70' is equal to 70
console.log('70'=== 70);
// Check if parseInt('8.8') is equal to 9
console.log(parseInt('8.8') === 9);
console.log(parseInt(8.8));
// Boolean value is either true or false.

// Write five JavaScript statement which provide falsy value.
let userName='',userAge = undefined,userIsmarried = null,userHasKids=false,userSalary=0;
// Write five JavaScript statement which provide truthy  value.
userName='Yashraj Jarande',userAge = 22,userIsmarried = 'Yes',userHasKids=true,userSalary=100000;
const subjects=[];
// Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()
console.log(5>4)// 5 > 4 true 
console.log(4>=3)// 4 >= 3 true
console.log(4<3)// 4 < 3 false
console.log(4<=3)// 4 <= 3 false
console.log(5==5)// 5 == 5 true
console.log(9===9)// 9 === 9 true
console.log(9=='9')// 9 == '9' true
console.log(8==='8')// 8 === '8' false
console.log(4!=4)// 4 != 4 false
console.log(4!==4)// 4 !== 4 false
console.log(4!='4')// 4 != '4' false
console.log(4!='4')// 4 != '4' false
console.log(4!=='4')// 4 !== '4' true
// Find the length of python and jargon and make a falsy comparison statement.
console.log('python'.length != 'jargon'.length);
// Figure out the result of the following expressions first without using console.log(). After you decide the result confirm it by using console.log()
console.log(4 > 3 && 10 < 12)// 4 > 3 && 10 < 12 true
console.log(4 > 3 && 10 > 12)// 4 > 3 && 10 > 12 false
console.log(4 > 3 || 10 < 12)// 4 > 3 || 10 < 12 true
console.log(4 > 3 || 10 > 12)// 4 > 3 || 10 > 12 true
console.log(!(4 > 3))// !(4 > 3) false
console.log(!(4 < 3))// !(4 < 3) true
console.log(!(false))// !(false) true
console.log(!(4 > 3 && 10 < 12))// !(4 > 3 && 10 < 12) false
console.log(!(4 > 3 && 10 > 12))// !(4 > 3 && 10 > 12) true
console.log(!(4 === '4'))// !(4 === '4') true
// There is no 'on' in both dragon and python
//this is statement is false thats why query retruns false.
console.log(!('dragon'.includes('on') && 'python'.includes('on')));