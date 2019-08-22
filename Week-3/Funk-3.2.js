/*
=================================================================
; Title:  Assignment 3.2
; Author: Richard Krasso
; Modified by: Karie Funk
; Date:  22 Aug, 2019
; Description: The Factory Pattern
;================================================================
*/


//HEADER
var header = require('./Funk-header.js');

console.log(header.display("Karie", "Funk", "Exercise 3.2"));

console.log("");



//START PROGRAM

//Functional classes
  
//Postgres Function below with its own properties.
function Postgres(properties) {
    this.username = properties.username || "admin";
    this.password = properties.password || "s3cret";
    this.server = properties.server || "localhost:5432";
}

//MySql Function below with its own properties.
function MySql(properties) {
    this.username = properties.username || "ca-admin";
    this.password = properties.password || "ca-s3cret";
    this.server = properties.server || "localhost:8000";
    this.version = properties.version || 5.7
}

//Added two additional functional classes

//Oracle Function below with its own properties.
function Oracle(properties) {
    this.username = properties.username || "admin";
    this.password = properties.password || "o-s3cret";
    this.server = properties.server || "localhost:5454";
    this.version = properties.version || "10g";
}

//Informix Function below with its own properties.
function Informix(properties) {
    this.username = properties.username || "admin";
    this.password = properties.password || "in-s3cret";
    this.server = properties.server || "localhost:3030";
}


function DatabaseFactory() {}

//Updated the factory create database method to include Oracle and Informix

DatabaseFactory.prototype.databaseClass = MySql;
DatabaseFactory.prototype.createDatabase = function(properties) {
    if (properties.databaseType === "Postgres") {
        this.databaseClass = Postgres;
    }
    if (properties.databaseType === "MySql"){
        this.databaseClass = MySql;
    }
    
    if (properties.databaseType === "Oracle") {
        this.databaseClass = Oracle;
    }

    if (properties.databaseType === "Informix") {
        this.databaseClass = Informix;
    }

    return new this.databaseClass(properties);
};

//Added two additional database factory objects below
//Call to create database functions and assigned default values to them

//Postgress database factory object 
var postgresFactory = new DatabaseFactory();
var postgres = postgresFactory.createDatabase({
    databaseType: "Postgres",
    username: "admin",
    password: "SuperSecret"
});

//MySql database factory object 
var mySqlFactory = new DatabaseFactory();
var mySql = mySqlFactory.createDatabase({
    databaseType: 'MySQL',
    username: "default",
    password: "password"
});

//Oracle database factory object 
var oracleFactory = new DatabaseFactory();
var oracle = oracleFactory.createDatabase({
    databaseType: "Oracle",
    username: "admin",
    password: "admin"
});

//Informix database factory object 
var informixFactory = new DatabaseFactory();
var informix = informixFactory.createDatabase({
    databaseType: "Informix",
    username: "admin",
    password: "password"
});

//Output for Oracle Properties 
console.log("Oracle { ")
console.log("    username: " + "\'<" + oracle.username +  "\>'");
console.log("    password: " + "\'<" + oracle.password +  "\>'");
console.log("    server: " + "\'<" + oracle.server +  "\>'");
console.log("    version: " + "\'<" + oracle.version +  "\>'");
console.log("}");

console.log("");

//Output for Informix Properties
console.log("Informix { ")
console.log("    username: " + "\'<" + informix.username +  "\>'");
console.log("    password: " + "\'<" + informix.password +  "\>'");
console.log("    server: " + "\'<" + informix.server +  "\>'");
console.log("}");


//END PROGRAM


