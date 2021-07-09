"use strict";

angular
    .module("myApp")
    .controller("FormController", formController);

formController.inject = ['localStorageService'];

function formController(localStorageService) {
    var vm = this;

    vm.user = {
        nom: '',
        email: '',
        motDePasse: '',
        nombreDeCheveux: 0,
        sexe: '',
        description: '',
        string: ''
    };

    vm.listString = ['string 1', 'string 2', 'string 3', 'string 4'];

    vm.handleFormSubmit = function() {
        console.log("Submit ok");
    };

    vm.stockeNom = function() {
        localStorage.setItem("nom", vm.user.nom);
        console.log("test");

        localStorageService.stockage("nom", vm.user.nom);

    };

}
