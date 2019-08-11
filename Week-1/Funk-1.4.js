/*
=================================================================
; Title:  Assignment 1.4
; Author: Karie Funk
; Date:   10 Aug 2019
; Description: Interface Assignment 1.4
;================================================================
*/

//HEADER
var header = require('./Funk-header.js');

console.log(header.display("Karie", "Funk", "Exercise 1.1"));

console.log("");

//START PROGRAM
function Car(model)
{
    this.model = model;
}

//PROTOTYPE FOR CAR FUNCTION
Car.prototype.start = function(){
    console.log("Car added to the racetrack!");
}

//TRUCK FUNCTION
function Truck(model,year){
    this.model = model;
    this.year = year;
}

Truck.prototype.start = function(){
    console.log("Truck added to the racetrack!");
}

//JEEP FUNCTION 
function Jeep(model, year, color){
    this.model = model;
    this.year = year;
    this.color = color;
}

Jeep.prototype.start = function(){
    console.log("Jeep added to the racetrack!");
}

var racetrack = [];

function driveIt(vehicle){
    vehicle.start();

    racetrack.push(vehicle);
}

var celica = new Car("Celica");
var fordF150 = new Truck("F150", "2010");
var wrangler = new Jeep("Wrangler", "2016", "White");

console.log("");

driveIt(celica);
driveIt(fordF150);
driveIt(wrangler); 

console.log('\n-- The following vehicles have been added to the racetrack: --');
for (var x = 0; x < racetrack.length; x++)
{
    console.log(racetrack[x].constructor.name + ": " + racetrack[x].model);
}

//END PROGRAM