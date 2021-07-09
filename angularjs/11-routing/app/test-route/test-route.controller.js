"use strict"

angular
    .module("myApp")
    .controller("TestRouteController", TestRouteController);

TestRouteController.inject = ["$routeParams"];

function TestRouteController($routeParams) {
    var vm = this;

    /************ VARIABLES *****************/
    vm.name = "Erwan";

    console.log($routeParams);
    vm.id = $routeParams.id;

    vm.count = 0;

    /************ FONCTIONS *****************/

    vm.addCount = function () {
        vm.count++;
    }
}