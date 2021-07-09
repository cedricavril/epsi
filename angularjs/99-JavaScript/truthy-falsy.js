/**
 * LE DOUBLE OU TRIPLE EGAL
 */
function doubleTripleEgal() {

    var conditionChampsTexte = true;
    var verificationCondition = true;
    if (conditionChampsTexte === verificationCondition) {

    }

    var texte = '2';
    var quantite = 2;
    if (texte == quantite) {
        // True
        // == ne vérifie pas le type
    }

    if (texte === quantite) {
        // False
        // === vérifie le type
    }

    /** La communauté recommande le === plutôt que le == 
     * pour la simple raison qu'il faut tester le type le plus possible
     * meme si nous sommes en typage faible dynamique
     */

    // true : boolean
    // false : boolean
    // 'qzdgzd' : string
    // 0 : number
}

/**
 * Truthy / Falsy
 */
function truthyFalsy(variableATester) {

    // Cas typique
    var resultat;

    if (variableATester !== null && variableATester !== undefined) {
        resultat = variableATester + 2;
    }

    if (variableATester) {
        resultat = variableATester + 2;
    }




    var variable1 = true;
    var variable2 = false;
    var variable3 = 'qzidhqzu';
    var variable4 = 0;

    if (variable1) {
        // truthy passe
    }
    if (variable2) {
        // falsy passe pas
    }
    if (variable3) {
        // truthy
    }
    if (variable4) {
        // falsy
    }

    // truthy
    // pas null
    // pas undefined
    // number autre que 0
    // string non vide
    // []
    // true

    // falsy
    // null
    // undefined
    // 0 (Faire attention)
    // ""
}

function doubleQuote() {
    var textSimple = 'Texte';
    var textDouble = "Texte";
}