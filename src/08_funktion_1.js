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
