'use strict';

const string = "Fuck you port & dash dash port";

// //index & last index
// console.log( string.indexOf('r') );
// console.log( string.lastIndexOf('r') );

// //searching by word
// console.log( string.indexOf('port') );
// console.log( string.lastIndexOf('port') );
// console.log( string.lastIndexOf('Port') );

// //slicing a sentence
// console.log(string.slice(5));
// console.log(string.slice(5,13));
// console.log(string.slice(string.indexOf('port'),string.lastIndexOf('port')));

// //print from the last
// console.log(string.slice(-4));
// console.log(string.slice(0,-1));

const pass = "J0nas";

const passLower = pass.toLowerCase();
//console.log(passLower);
const passLo = pass[0].toUpperCase()+passLower.slice(1);
//console.log(passLo);

const email = "kidsjhgkjf \n oiuhj";
const normalize = email.toLowerCase().trim();

//console.log(normalize)

const pgb = '299gb';
const ptb = pgb.replace('gb','tb');
console.log(ptb);

//replacing all using replaceAll
// const pgbAll = 'gb299gb';
// const ptbAll = pgbAll.replaceAll('gb','tb');
// console.log(ptbAll);

//replacing all using regular expression
const pgbAll = 'gb299gb';
const ptbAll = pgbAll.replace(/gb/g ,'tb');
console.log(ptbAll);

console.log(pgbAll.includes('299'));
console.log(pgbAll.startsWith('gb') && pgbAll.endsWith('gb') );

//split
const sSplit = "1 2 3 4 5 6 7 8 9";

const sJoin = sSplit.split(' ')
console.log(sJoin);

//join

console.log(sJoin.join(', '));

const func = function(strings){
    const stringSplit = strings.split(' ');
    let stringUpper = [];

    for (let split of stringSplit){
        stringUpper.push( split.replace(split[0], split[0].toUpperCase()));
    }
        
    
    stringUpper = stringUpper.join(' ');

    console.log(stringUpper);
}

func("horses are Friendly");

//padding
let message = '1789435813';

console.log( message.padStart(14, '+880').padEnd(20, ' Naser') );

//repeat

let mes = "Repeated";

console.log((mes+' ').repeat(5));