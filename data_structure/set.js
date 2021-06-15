'use strict';

const setArr = new Set([
    'pizza',
    'pie',
    'burger',
    'sandwich',
    'burger',
    'sandwich',
    'burger',
    'sandwich',
    'pizza'
]);

console.log(setArr);

//to check 
console.log(setArr.has('pizza'));
setArr.add('pasta'); 
setArr.delete('sandwich');

for(const arr of setArr)
    console.log(arr);