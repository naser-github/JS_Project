'use strict';

const default_parameter = function(flightNum = "BZ08",numPassengers = "156", price= 500){
    //console.log(flightNum,numPassengers, price);
}

//console.log("First Test");
default_parameter();
//console.log("Second Test");
default_parameter(100, 200); //can not skip variable in function
default_parameter(100, undefined,200); //can not skip variable in function

//second video

// const flight = 'LH234';
// const passengerDetails = {
//     name:'jonas',
//     passportId: 1234567890,
// };

// const checkIn = function (flightNum, passenger){

// }

// checkIn(flight, passengerDetails);

// const createBooking = function (
//   flightNum,
//   numPassenger = 1,
//   price = numPassenger * 50
// ) {
//     const array = {
//       flightNum,
//       numPassenger,
//       price
//     };
//     console.log(array);
// };

// createBooking('lh123', undefined,100);

// const noSpace = function (str) {
//     var noSpace = str.replace(/ /g, ' ');
//     console.log(noSpace);
// }

// noSpace("hanzo the salamander")

//130 Callback functon
// const douFunc = function (param) {
//   return function (name) {
//     console.log(`${param} ${name}`);
    
//   }
// }

// const passer = douFunc('hey');

// passer("naser");


//131 call method

// const salamander = {
//   name: "Hanzo",
//   killed: 121,
//   defeated: [],
//   encounter(person){
//     this.killed++;
//     console.log(
//       `${this.name} has killed ${person}. This is his ${this.killed} encounter`
//     );
//     this.defeated.push(person);
//   }
// }

// const anbu = {
//   name: "Danzo",
//   killed: 321,
//   defeated: [],
// };

// const show = salamander.encounter;

// show.call(salamander, 'Yahiko');
// console.log(salamander);

// show.call(anbu, "Shisui");
// console.log(anbu);

// salamander.k = function () {
//   this.killed++;
//   console.log(this.killed++);
// }
// document.addEventListener("click", salamander.encounter.bind(salamander, "df"));

// const addTax = function (tax) {
//   return function (value) {
//     console.log(value+value*tax);   
//   }
// }

// const showTax = addTax(0.1);
// showTax(500);

//135 closure

// const closure = function () {
//     let up=0;
//     return function () {
//         up++;
//         console.log(`upward: ${up}`);
//     };
// }

// let receiver = closure();

// receiver();
// receiver();
// receiver();
// receiver();
// receiver();
// receiver();

// const r = closure();

// receiver();
// receiver();
// receiver();
// receiver();
// receiver();
// receiver();

// r();

