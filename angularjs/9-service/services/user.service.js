"use strict";

angular
    .module("myApp")
    .service("UserService", UserService);

function UserService() {
    this.testService = function () {
        console.log("Test du service");
    }
}