function getLengthOfMissingArray(subArrays) {
    
    if(!(Array.isArray(subArrays)) || subArrays.length === 0 )
          return 0;
    for(counterVariable=0;counterVariable<subArrays.length;counterVariable++){
        if(!(Array.isArray(subArrays[counterVariable])) || subArrays[counterVariable].length===0)
        return 0;    
      }
    subArrays.sort((currentValue,nextValue) => currentValue.length - nextValue.length)

     let lengthOfNestedArray=subArrays[0].length;
      for(counterVariable=0;counterVariable<subArrays.length;counterVariable++){
          if(subArrays[counterVariable].length !== lengthOfNestedArray){

              return lengthOfNestedArray;
          }
          lengthOfNestedArray++;
      }
    }