"use strict";

angular
    .module("myApp")
    .controller("UserController", UserController);

function UserController() {
    var vm = this;
    vm.name = "Erwan";
}
