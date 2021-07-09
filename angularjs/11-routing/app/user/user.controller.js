"use strict"

angular
    .module("myApp")
    .controller("UserController", user);

function user() {

    var vm = this;
    vm.name = "variable test";

}