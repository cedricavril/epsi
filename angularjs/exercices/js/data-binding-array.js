"use strict";

angular
    .module("myApp")
    .controller("TodoListController", todoListController);

function todoListController() {
    var vm = this;
    vm.nouveauChamp = 'nouveau string';
    vm.stringTableau = ['string 1', 'string 2', 'string 3', 'string 4'];
    vm.stringCourant = '';
    vm.majClasse = 'cache';
    vm.majValeur = '';

    vm.soumettreAjout = function(){
        vm.stringTableau.push(vm.stringCourant);
    }

    vm.supprElement = function(index){
        vm.stringTableau.splice(index,1);
    }

    vm.majElement = function(index){
        // faire le test de truthy
        vm.stringTableau[index] = vm.majValeur;
        vm.majClasse = 'cache';
    }

    vm.afficheMajComposants = function(){
        vm.majClasse = 'montre';
        vm.majValeur = '';
    }

    vm.cacheToutSauf = function(index){
        var elements = document.querySelectorAll('td input');
        for (let i = 0; i < elements.length; i++) {
            elements[i].style.display = 'none';
        }
        document.querySelectorAll('td input')[index].style.display = 'inline';
    }

    // vm.majValeur = function(index){

    // }

}

/*
majClass
majValeur
majElement($index)
afficheMajComposants()
*/