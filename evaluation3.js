let centre = 3,arrayPrevious=centre-1,arrayNext = centre+1,arrayFirst=0,arrayLast=6;
const print  = (arrayPrevious,arrayNext) =>
 {
    array=[' ',' ',' ',' ',' ',' ',' '];
    array[arrayPrevious] = '*';
    array[arrayNext] = '*';
    let newString = array.join('');
    console.log(newString);
 }
for(let outerIndex=0;outerIndex<3;outerIndex++){
            if(outerIndex===0)
                console.log('   *   ');
            
            print(arrayPrevious--,arrayNext++);

}
for(let outerIndex=3;outerIndex>0;outerIndex--){
   
    
    print(arrayFirst++,arrayLast--);
    if(outerIndex===1)
    console.log('   *   ');

}

// print(3)

