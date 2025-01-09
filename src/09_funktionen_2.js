/*** Rechner */
/*
0. a+b | a-b | a*b | a/b  --> Ergebnis c 

1. Dateneingabe + -überprüfung :  
2. Auswahl Rechenart : 
3. Fkt. Grundrechenarten : check!
4. Ausgabe in Konsole : check!
*/

const ERROR_STR_DIV = "Teilen durch 0 nicht möglich";

// module: division a / b |  test:
// output(divide(4,2));
// output(divide(3,2));
// output(divide(3,-2));
// output(divide(0,2));
// output(divide(3,0));
// output(divide(0,0));
function divide(a,b) 
{
    if (b == 0) // Ausnahme
    {
        return ERROR_STR_DIV
    }
    return a / b;
}


    // if (b != 0) {   // Test
    //     return a / b    
    // } else {
    //     return ERROR_STR_DIV
    // }
 
// }


// module: multiplication a * b |  test:
// output(multiply(3,2));
// output(multiply(3,-2));
// output(multiply(3,0));
function multiply(a,b) 
{
	return  a * b;
}


 // module subtraction a - b | test:
// output(subtract(3,2));
// output(subtract(3,-2));
// output(subtract(3,0));
// output(subtract(0,2));
function subtract(a,b) 
{
	return a - b;
}


// module: addition a +b | test:
// output(add(3,2));
// output(add(3, -2));
// output(add(3, 0));
function add(a, b) 
{
    return a + b;   
}


//module: output | test :
// output("hi");
// output(2);
// output(true);
function output(outputData) 
{
    console.log(outputData);
}