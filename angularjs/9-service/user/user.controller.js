"use strict";

angular
    .module("myApp")
    .controller("UserController", UserController);

UserController.inject = ["$location", "$log", "UserService"];

function UserController($location, $log, UserService) {
    var vm = this;

    /********** VARIABLES **********/
    vm.urlAbs = $location.absUrl();

    vm.tamponDuService = function () {
        UserService.testService();
    }

    vm.testFonction = function (valueForm) {
        localStorage.setItem("TestKey", "String Key");

        var result = localStorage.getItem("TestKey");
        console.log("result", result);

        UserService.testService();

        console.log("Console Log");
        console.info("Console Info");
        console.error("UserController testFonction Error de type blabla");
        console.warn("Console Warn");

        $log.info("$log Info");
        $log.error("$log error");
        $log.warn("$log Warn");
    }

    vm.testFonction();

    /*********** FONCTIONS ***********/

}


