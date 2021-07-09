"use strict"

// Portée de fonction
// Seule capable de créer des variables globales
var varVariable = "TexteVar";
console.log("window.varVariable", window.varVariable);

{
    // Portée de bloc
    let letVariable = "TexteLet";
    console.log("window.letVariable", window.letVariable);
    console.log("letVariable1", letVariable);
}
console.log("letVariable2", letVariable); 
