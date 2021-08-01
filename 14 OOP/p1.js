'user strict';

//prototype constructor

// const Person = function (fName, lName, dob) {
//     this.name = fName;
//     this.lName = lName;
//     this.dob = dob;
// }

// Person.prototype.calcAge = function(){
//     this.age = (2021 - this.dob);
// };


// const jon = new Person ('Jon', 'Wick', 1969);
// const naruto = new Person ('Uzumaki', 'Naruto', 1999);

// naruto.calcAge();

// console.log(jon);
// console.log(naruto);

//ex-1 ----------------------------------------

// const Car = function (make, speed) {
//     this.make = make;
//     this.speed = speed;
// };

// Car.prototype.accelerate = function () {
//   console.log(this.speed+10);  
// };

// Car.prototype.brake = function () {
//     console.log(this.speed - 5); 
// }

// const carOne = new Car("BMW", 220);

// carOne.accelerate();
// carOne.accelerate();
// carOne.brake();
// carOne.accelerate();

//----------------------------------------

// class PersonCl {
//     constructor ( fullName, dob){
//         this.fullName = fullName;
//         this.dob = dob;
//     }

//     set fullName(name){
//         this._fullName = name;
//     }

//     get fullName(){
//         return this._fullName;
//     }
// }

// const jonCL = new PersonCl ('Gojou Satoru', 1996);
// console.log(jonCL);


//ex-3  ------------------------------------

// const Car = function(model, speed) {
//     this.model = model;
//     this.speed = speed;
// };

// Car.prototype.accelerate = function () {
//     this.speed += 10;
// };

// Car.prototype.brake = function () {
//     this.speed-=5;
// };

// const EV= function(model, speed, charge) {
//     Car.call(this, model, speed);
//     this.charge = charge;
// };

// //link the child prototype with parent prototype
// EV.prototype = Object.create(Car.prototype);


// EV.prototype.ChargeBattery = function(chargeTo){
//     this.charge = chargeTo;
// };

// //overriding parent function
// EV.prototype.accelerate = function () {
//   this.speed += 10;
//   this.charge--;
// };

// const ford = new EV ('Ford Mustang 69', 220, 90);

// ford.ChargeBattery(40);
// ford.accelerate();
// ford.brake();
// ford.brake();
// ford.accelerate();

// console.log(ford);

//------------------------------------

class CarCl {
  constructor(model, speed) {
    this.model = model;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
  }

  brake() {
    this.speed -= 5;
    
    return this;
  }
}

class EVCL extends CarCl{
    #charge;
  constructor(model, speed, charge) {
    super(model, speed)
    this.#charge = charge;
  }

  _charge(val){
    this.#charge = val;
    return this;
  }

  accelerate(){
      this.speed+=10;
      this.#charge--;
      console.log(`${this.model} is going at ${this.speed} km\h with a charge of ${this.#charge} `);
      return this;
  }
}

const rev = new EVCL("Ford-69",220,40);

rev._charge(90).accelerate().accelerate().brake()._charge(60).accelerate();