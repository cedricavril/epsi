"use strict";

angular
    .module("myApp")
    .service("StorageService", StorageService);

function StorageService() {

    this.setItem = function (key, value) {
        localStorage.setItem(key, value);
    }

    this.getItem = function (key) {
        return localStorage.getItem(key);
    }

    this.removeItem = function (key) {
        localStorage.removeItem(key);
    }

    this.clearItems = function () {
        localStorage.clear();
    }
}