"use strict";

angular
    .module("myApp")
    .controller("FormController", FormController);



function FormController() {
    var vm = this;

    /********** VARIABLES **********/
    vm.name = "Erwan";
    vm.valueTexte = "";
    vm.valueNumber;
    vm.valueColor;
    vm.valueDate;
    vm.valueFile;
    vm.valueCheckbox;
    vm.valueRadio;
    vm.valueRadioQuantite;
    vm.valueTextArea;
    vm.exempleNativeSelectValue;
    vm.exempleSelectValue;
    vm.selectValue;
    vm.selectComplexValue;

    vm.listString = [
        "orange",
        "cerise",
        "kiwi",
        "banane"
    ];
    vm.listObject = [
        { name: "orange", color: "orange", count: "3" },
        { name: "cerise", color: "red", count: "2" },
        { name: "kiwi", color: "green", count: "1" },
        { name: "banane", color: "yellow", count: "4" }
    ];

    vm.selectValue = "";
    vm.selectComplexValue = "";

    /********** <FORM> **********/

    vm.valueTexteForm1 = "";
    vm.valueTexteForm2 = "Toto";
    vm.valueTexteForm3 = "Erwan";
    vm.valuePassword;
    vm.valueCount = 3;

    vm.formForTestInputs = {
        valueTexteForm1: "",
        valuePassword: "",
        valueCount: 3
    }

    vm.conditionTrue = true;
    vm.conditionFalse = false;

    /********** END <FORM> **********/

    /*********** FONCTIONS ***********/

    vm.handleSubmit = function () {
        // Validation sur champs critique
        console.log("Ok submit", vm.formForTestInputs);
    }

    /*********** END FONCTIONS ***********/

}


