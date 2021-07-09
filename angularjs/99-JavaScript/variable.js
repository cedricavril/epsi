"use strict"

// Variable globale
var nameProf = "Erwan";

// Appel de fonctions
displayConsoleNameProf();
displayConsoleTestLocale();

// console.log("testLocal", testLocal); // Marche pas
console.log("displayConsoleTestLocale", displayConsoleTestLocale());

// Déclarations des fonctions
function displayConsoleNameProf() {
    console.log("Nom du prof", nameProf);
}

function displayConsoleTestLocale() {
    var testLocal = "Local";
    console.log("testLocal", testLocal);
    return testLocal;
}