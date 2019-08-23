/*
=================================================================
; Title:  Assignment 3.3
; Author: Richard Krasso
; Modified by: Karie Funk
; Date:  22 Aug, 2019
; Description: The Singleton Pattern
;================================================================
*/


//HEADER
var header = require('./Funk-header.js');

console.log(header.display("Karie", "Funk", "Exercise 3.3"));

console.log("");

//START PROGRAM

//Variable named DatabaseSingleton created with function inside named createInstance that holds return statement 
var DatabaseSingleton = (function() {
    var instance;
    function createInstance() {
        var postgresDatabase = new Object("Database instance initialized!");
        return postgresDatabase;
    }

    return {
        getInstance: function() {
            if (!instance) {
                instance = createInstance();
            }
            return instance;
        }
    }
   })();

//Created new function and named it databaseSingletonTest()
//Inside of that function I created two new database instances
   function databaseSingletonTest()
   {
       var oracle = DatabaseSingleton.getInstance();
       var postgres = DatabaseSingleton.getInstance();
       
       //Output to see if two instances match 
       console.log("Same database instance? %s ", oracle === postgres);
   }

   //Called the databaseSingletonTest() function 
   databaseSingletonTest();

//END PROGRAM