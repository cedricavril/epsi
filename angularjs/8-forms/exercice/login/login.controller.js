"use strict";

angular
    .module("myApp")
    .controller("LoginController", LoginController);



function LoginController() {
    var vm = this;

    /********** VARIABLES **********/
    vm.formInputs = {
        username: "",
        password: ""
    }

    /*********** FONCTIONS ***********/
    vm.submit = function () {
        console.log(vm.formInputs);
    }

}


