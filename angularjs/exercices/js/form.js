"use strict";

angular
    .module("myApp")
    .controller("FormController", formController);

function formController() {
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
    }


}
