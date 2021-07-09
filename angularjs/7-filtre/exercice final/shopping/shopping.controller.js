"use strict";

angular
    .module("myApp")
    .controller("ShoppingController", ShoppingController);

function ShoppingController() {
    var vm = this;
    vm.filterValue = "";
    vm.listObject = [
        { name: "orange", color: "orange", count: "3" },
        { name: "cerise", color: "red", count: "2" },
        { name: "kiwi", color: "green", count: "1" },
        { name: "banane", color: "yellow", count: "4" }
    ]
    vm.columnOrder = "";
    vm.reverse = false;

    vm.changeOrder = function (column) {
        if (column) {
            vm.reverse = vm.columnOrder === column ? !vm.reverse : false;
            vm.columnOrder = column;
        }
    }
}
