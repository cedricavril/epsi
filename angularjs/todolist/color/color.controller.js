"use strict"

angular
    .module("myApp")
    .controller("ColorController", ColorController);


function ColorController() {
    var vm = this;

    /************ VARIABLES *****************/
    vm.numberValue = 0;
    vm.cssClass = "";
    vm.message = "Non reconnu";

    /************ FONCTIONS *****************/
    vm.changeText = function () {
        if (vm.numberValue === 0 || vm.numberValue) {
            if (vm.numberValue >= 1 && vm.numberValue <= 5) {
                vm.message = "Petit";
                vm.cssClass = "app-color-red";
            } else if (vm.numberValue >= 6 && vm.numberValue <= 10) {
                vm.message = "Moyen";
                vm.cssClass = "app-color-blue";
            } else if (vm.numberValue >= 11 && vm.numberValue <= 15) {
                vm.message = "Grand";
                vm.cssClass = "app-color-green";
            } else {
                vm.message = "Non reconnu";
                vm.cssClass = "";
            }
        }
    }
}