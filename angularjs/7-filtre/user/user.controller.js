"use strict";

angular
    .module("myApp")
    .controller("UserController", UserController);

function UserController() {
    var vm = this;
    vm.name = "Erwan Baccon";

    vm.jsonValue = {
        name: "Erwan",
        age: 29
    }

    vm.dateValue = new Date();

    vm.elements = [
        "Orange",
        "Cerise",
        "Kiwi",
        "Banane",
        "Pomme"
    ]
}
