'use strict';

const map = new Map();
map.set('j','jones');
map.set('jo',['jones','hon']).set(false,'hoo');

//console.log(map);

//console.log(map.get(false));

map.set('k',false);
//console.log(map.get('k'));
//console.log(map.get(false));

let arr =[1,2];
map.set(arr,'joooooooo');
// arr = [2,3];

console.log(map.get(arr));