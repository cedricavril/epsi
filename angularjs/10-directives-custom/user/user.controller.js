"use strict";

angular
    .module("myApp")
    .controller("UserController", UserController);

function UserController() {
    var vm = this;

    /********** VARIABLES **********/
    vm.name = "Erwan";
    vm.count = 99;
    vm.booleanLoader = false;
    vm.textButton = "Afficher ou non le texte"
    vm.textToDisplay = "Ceci est un texte"


    /*********** FONCTIONS ***********/
    vm.displayOrHideLoader = function () {
        console.log("displayOrHideLoader");
        vm.booleanLoader = !vm.booleanLoader;
    };

}


