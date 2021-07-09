"use strict";

angular
    .module("myApp")
    .controller("StorageController", StorageController);

StorageController.inject = ["StorageService", "StorageConstant"];

function StorageController(StorageService, StorageConstant) {
    var vm = this;

    /********** VARIABLES **********/
    vm.storageConstant = StorageConstant;


    /*********** FONCTIONS ***********/
    vm.setItem = function (key, value) {
        StorageService.setItem(key, value);
    }

    vm.getItem = function (key) {
        var result = StorageService.getItem(key);
        console.log("getItem", result);
    }

    vm.removeItem = function (key) {
        StorageService.removeItem(key);
    }

    vm.clearItems = function () {
        StorageService.clearItems();
    }

}


