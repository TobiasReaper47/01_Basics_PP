/***** Funktionen 01 *****/
// 1. Kapselung von Codeblöcken

// Funktionsaufruf | call
// test();

// Funktionsrumpf | callee
// Funktionsdelaration
function test()
{
console.log("Hallo Karl!");
}

/***** Funktionen 02a *****/
// 2a. Parametrisierung + Datenübergabe von INNEN

// ausgabeNamen(); // call

function ausgabeNamen() 
{
    let firstName = "Karl";
    console.log("Hallo, " + firstName + "!");  
    
}

// console.log(firstName); // Fehler : scope!

/***** Funktionen 02b *****/
// 2b. Parametrisierung + Datenübergabe von AUSSEN

ausgabeNamen2("Karl"); // Argument --> Daten für Parameter
ausgabeNamen2("Marie");
ausgabeNamen2("Harry");

function ausgabeNamen2(firstName) // Parameter
{
        console.log("Hallo, " + firstName + "!");   
}


/***** Funktionen 02c *****/
// 2c. Mehrere Parameter / Argumente

// ausgabeNamenParams("Max","Mütze");

// const prompt = require('prompt-sync')({sigint: true});
// ausgabeNamenParams(prompt("Vorname? :"),prompt("Name? :")); // Piping

function ausgabeNamenParams(firstName, secondName) {
    console.log("Hallo, " + firstName + " " + secondName + "!");
}

/***** Funktionen 03a *****/
// 03a. Vorbereitung -Trennen der Funktionalitäten
// Postulat: one function = one job (uncle Bob)
// SRP single responsibility principle

// ausgabeNamenSRP("Max","Mütze");

function ausgabeNamenSRP(firstName, secondName) {
    
    // 1. Funktionalität: string composing
    const GAP = " ";
    let outputStr = "Hallo,"+ GAP + firstName + GAP + secondName + "!"
    
     // 2. Funktionalität: string output
    console.log(outputStr);

}

/***** Funktionen 03b *****/


// 2. Funktionalität: string output
// output("hi");
// output(2);
// output(true);
function output(outputData) 
{
    console.log(outputData);
}

// 1. Funktionalität: string composing
output(getString("Max","Mütze"));


function getString(firstName, secondName) {
    const GAP = " ";
    let outputStr = "Hallo,"+ GAP + firstName + GAP + secondName + "!"
    
}


// 2. Funktionalität: string output
function output(outputData)
{
    console.log(outputData);
}
