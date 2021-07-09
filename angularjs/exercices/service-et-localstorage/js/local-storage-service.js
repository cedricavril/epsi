"use strict";

angular
    .module("myApp")
    .service("localStorageService", localStorageService);

function localStorageService() {

    this.stockage = function(cle, valeur) {
        localStorage.setItem(cle, valeur);
    }

}
