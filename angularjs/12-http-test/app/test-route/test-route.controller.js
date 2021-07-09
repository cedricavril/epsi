"use strict"

angular
    .module("myApp.testRoute", [])
    .controller("TestRouteController", TestRouteController);

TestRouteController.inject = ["$routeParams"];

function TestRouteController($routeParams) {
    var vm = this;

    /************ VARIABLES *****************/
    vm.name = "Erwan";

    vm.id = $routeParams.id;

    vm.count = 0;
    vm.table = ["Test1", "Test2"];

    /************ FONCTIONS *****************/

    vm.addCount = function () {
        vm.count++;
    }

    vm.addElementInTable = function (text) {
        if (text) {
            vm.table.push(text);
        }
    }
}