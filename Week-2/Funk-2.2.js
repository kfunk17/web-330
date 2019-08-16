/*
=================================================================
; Title:  Assignment 2.2
; Author: Richard Krasso
; Modified by: Karie Funk
; Date:  16 Aug, 2019
; Description: Prototypes - blueprints for objects that 
; the constructor creates. 
;================================================================
*/

/*
 Expected output:

 FirstName LastName
 <AssignmentName>
 <Today's Date>

 The person's full name is '<fullname>.'
 The person's age is '<age>.'

*/

//HEADER
var header = require('./Funk-header.js');

console.log(header.display("Karie", "Funk", "Exercise 2.2"));

console.log("");


//START PROGRAM

/*Created a person object below.
  Created age function inside curly braces that returns an age.
*/
var person = {
    getAge: function(){
        return this.age;
    }
};

/* Instantiated a person object below.
   First parameter is person and added implementation for
   that object which includes age for the first one and full name for the second,
   both include values. 
*/
var robert = Object.create(person, {
    "age":
    {
        "value": "46"
    },
    "fullname":
    {
        "value": "Robert Schumann"
    }

});

// Created new person object with age and a value of 33. 
var chris = Object.create(person, {
    "age": {
        "value": "33"
    }
});

//This will output the variable robert's age.
console.log(robert.getAge());

//This will output the full name and age below.
console.log("The person's full name is: '%s'", robert.fullname);

console.log("The person's age is '%s'", robert.age);

//Output of the variable chris.
console.log("Chris is %s years old", chris.getAge());

//END PROGRAM