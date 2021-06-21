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

const flight = 'LH234';
const passengerDetails = {
    name:'jonas',
    passportId: 1234567890,
};

const checkIn = function (flightNum, passenger){

}

checkIn(flight, passengerDetails);
