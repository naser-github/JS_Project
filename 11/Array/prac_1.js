'use strict';

const transaction = [1,2,3,4,5,6,7,8,9,10];
console.log('dfjk');
for(const t of transaction){
    if(t<6){
        console.log(t);
    }
        
}

//foreach

console.log('--------------');

transaction.forEach(function (element, index, array) {
    if (element > 5) {
      console.log(element);
    } 
            
});