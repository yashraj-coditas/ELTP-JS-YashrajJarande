const add = (number1,number2) => number1+number2;
const displaySum = (add) => add(5,6);
console.log(displaySum(add));

const array =[1,2,3,4];
const temoraryArray=[];

const likeFilter = (trialArray,filterFunction) => {
    for(const number of trialArray){
        if(filterFunction(number))
            temoraryArray.push(number);
    }
        return temoraryArray;
    
    
}



const newArray = likeFilter(array,(number => !(number%2))); 
console.log(newArray);


const newReduce = (arrayStored,sum,accumulateFunction) =>{
        for(const number of arrayStored){
            sum = accumulateFunction(sum,number)
        }
        return sum;
}
const customReduce = newReduce(array,0,(accumulator,currValue) => accumulator+=currValue)
console.log(customReduce);
// const value = array.reduce((accumulator,currValue) => accumulator+=currValue);
// console.log(value);
// const newFilter = array.filter(number => number%2)
// console.log(newFilter);