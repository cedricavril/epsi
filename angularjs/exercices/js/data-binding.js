"use strict";

angular
    .module("myApp")
    .controller("InputNumberController", inputNumberController);

function inputNumberController() {
    var vm = this;
    vm.grandeur = 0;

    vm.changementText = function() {
        if (vm.grandeur === 0 || vm.grandeur) {
            if (vm.grandeur < 0 || vm.grandeur > 15) {
                vm.resultClass = 'redColor';
                return 'Non reconnu';
            } else if (vm.grandeur <= 5) {
                vm.resultClass = 'redColor';
                return 'Petit';
            } else if (vm.grandeur <= 10) {
                vm.resultClass = 'blueColor';
                return 'Moyen';
            } else if (vm.grandeur <= 15) {
                vm.resultClass = 'greenColor';
                return 'Grand';
            } else {
                vm.resultClass = 'redColor';
                return 'Non reconnu';
            }
        }
        return vm.resultText;
    }
}