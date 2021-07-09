"use strict";

angular
    .module("myApp")
    .controller("ResetController", ResetController);



function ResetController() {
    var vm = this;

    /********** VARIABLES **********/
    vm.oldFormInputs = {
        username: "Echo",
        name: "Erwan"
    };

    vm.formInputs = {
        username: "",
        name: ""
    };

    /*********** FONCTIONS ***********/
    vm.resetToOldValue = function () {
        vm.formInputs = angular.copy(vm.oldFormInputs);
    }

    /********** CALL FUNCTION ********/
    vm.resetToOldValue();

}


