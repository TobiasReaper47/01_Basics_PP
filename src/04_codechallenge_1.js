/*********   CODE CHALLENGE 01 **********/
 
/*
Geben Sie über eine Prompt-Anforderung eine Zahl ein.
Geben Sie über eine Prompt-Anforderung eine zweite Zahl ein.
Berechnen Sie die Summe der beiden Zahlen.
Geben Sie die Summe der Zahlen in die Konsole aus:
"Die Summe der Zahlen ist: summe"
*/


const prompt = require('prompt-sync')({sigint: true});

let zahl1, zahl2, summe;
zahl1 =parseInt(prompt("Zahl 1: "));
zahl2 =parseInt(prompt("Zahl 2: "));
summe = zahl1 + zahl2;
console.log("Die Summe der Zahlen ist: " +summe);