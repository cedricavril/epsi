'use strict'

angular
    .module("myApp")
    .controller("UserWithServiceController", UserWithServiceController);

UserWithServiceController.inject = ["$http", "UserWebService"];

function UserWithServiceController($http, UserWebService) {
    var vm = this;
    vm.name = "Erwan";
    vm.resultByGet;
    vm.tableResultByGet;

    vm.init = function () {
        UserWebService.getServer()
            .then(function (response) {
                console.log(response);
                vm.resultByGet = response;
            }).catch(function (error) {
                console.error(error);
            });
    };

    vm.init();

    vm.getUsers = function () {
        console.log("Y'a rien a voir ici");
    }

};