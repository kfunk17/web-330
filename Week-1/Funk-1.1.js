/*
=================================================================
; Title:  Assignment 1.1
; Author: Karie Funk
; Date:   10 Aug 2019
; Description: Class Refresher 
;================================================================
*/

/*Using functions, create a cell phone object with the following properties / methods
Manufacturer
Model
Color
Price
getPrice()
getModel()
getDetails()
The getPrice() function will return the cell phones price.
The getModel() function will return the cell phones model
The getDetails() function must call the getPrice() and getModel() functions and output the Manufacturer, Model, Color, and Price
Instantiate a new cell phone object (supply your own default values) and call the getDetails() function.
*/


//HEADER
var header = require('./Funk-header.js');

console.log(header.display("Karie", "Funk", "Exercise 1.1"));

console.log("");

//Start Program

function cellPhone(manufacturer, model, color, price) {

//this cell phone object

this.manufacturer = manufacturer;

this.model = model;

this.color = color;

this.price = price;

//get price function
this.getPrice = function() {

return this.price;

}
 this.getModel = function()
{  
    return this.model;
}

  this.getDetails = function()
  {
      return "Manufacturer: " + this.manufacturer + "\nModel: " + this.getModel() +
      "\nColor: " + this.color + "\nPrice: " + this.getPrice();
  }
}

//local variable to hold values
  var cellPhone = new cellPhone("Apple", "iPhone X", "White", "399.99");

  console.log(cellPhone.getDetails());

  //End Program