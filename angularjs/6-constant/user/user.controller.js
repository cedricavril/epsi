"use strict";

angular
    .module("myApp")
    .controller("UserController", UserController);

UserController.inject = ["UserConstant", "ColorConstant", "ColorConstantExt"];

function UserController(UserConstant, ColorConstant, ColorConstantExt) {
    var vm = this;
    vm.name = "Le Prof";

    // Constante uniquement pour le UserController
    const PETIT_MIN = 1;

    vm.test = function () {
        console.log(UserConstant);
        console.log(ColorConstant);
        console.log(ColorConstant.BLUE);
        console.log(ColorConstantExt);
        console.log(PETIT_MIN);
    }
}
