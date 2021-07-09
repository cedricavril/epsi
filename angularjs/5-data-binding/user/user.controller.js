"use strict";

angular
    .module("myApp")
    .controller("UserController", UserController)
    .run(function ($rootScope) {
        $rootScope.name = "Le prof";
    });



function UserController() {
    var vm = this;

    /********** VARIABLES **********/
    vm.name = "Erwan";
    vm.subName = "Baccon";
    vm.initValue = "Prof";

    /*********** FONCTIONS ***********/
    vm.fullName = function () {
        return vm.name + " " + vm.subName;
    }

    vm.displayTexte = function (textValue) {
        return textValue;
    }

    vm.handleClick = function () {
        alert("Il y a eu un clic !");
    }

}


