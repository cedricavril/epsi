"use strict"

angular
    .module("myApp")
    .controller("TodoListController", TodoListController);


function TodoListController() {
    var vm = this;

    /** VARIABLES */
    vm.elements = [
        { name: "Orange", isModeUpdate: false },
        { name: "Cerise", isModeUpdate: false },
        { name: "Banane", isModeUpdate: false },
        { name: "Kiwi", isModeUpdate: false }
    ];
    vm.addInputValue = "";

    /** FONCTION */
    vm.addValue = function () {
        if (vm.elements && vm.addInputValue) {
            vm.elements.push({ name: vm.addInputValue, isModeUpdate: false });
        }
    };

    vm.removeElement = function (index) {
        vm.elements.splice(index);
        console.log("removeElement", index);
    };

    vm.passInModeUpdate = function (index) {
        vm.elements[index].isModeUpdate = true;
    };

    vm.exitModeUpdate = function (index) {
        vm.elements[index].isModeUpdate = false;
    }

}