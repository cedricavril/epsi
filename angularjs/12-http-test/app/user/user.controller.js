'use strict'

angular
    .module("myApp")
    .controller("UserController", UserController);

UserController.inject = ["$http"];

function UserController($http) {
    var vm = this;
    vm.name = "Erwan";
    vm.resultByGet;
    vm.tableResultByGet;
    vm.resultByPost;
    vm.resultByPut;
    vm.resultByDelete;

    var newUser = {
        name: "Erwan BACCON",
        password: "passwordProf",
        profession: "profunpeurelou"
    };

    var userUpdate = {
        name: "Erwann Baccon",
        password: "passwordProf2",
        profession: "profunpeurelou2",
        id: "16"
    };

    vm.asyncDisplayData;
    vm.testAsyncBefore;
    vm.testAsyncAfter;

    vm.init = function () {
        // Test for call API
        $http.get("http://localhost:3001/")
            .then(function (response) {
                console.log(response);
                vm.resultByGet = response.data;
            }).catch(function (error) {
                console.error(error);
            });
    };

    vm.init();

    vm.getUsers = function () {
        $http.get("http://localhost:3001/users")
            .then(function (response) {
                console.log(response);
                vm.tableResultByGet = response.data;
            }).catch(function (error) {
                console.error(error);
            });
    };

    vm.postUsers = function () {
        $http.post("http://localhost:3001/users", newUser)
            .then(function (response) {
                console.log(response);
                vm.resultByPost = response.data;
            }).catch(function (error) {
                console.error(error);
            });
    };

    vm.putUsers = function () {
        $http.put("http://localhost:3001/users/16", userUpdate)
            .then(function (response) {
                console.log(response);
                vm.resultByPut = response.data;
            }).catch(function (error) {
                console.error(error);
            });
    };

    vm.deleteUsers = function () {
        $http.delete("http://localhost:3001/users/16")
            .then(function (response) {
                console.log(response);
                vm.resultByDelete = response.data;
            }).catch(function (error) {
                console.error(error);
            });
    };

    /**
     * Pour tester le code asynchrone
     */
    vm.getAsyncUsers = function () {
        vm.asyncDisplayData = "Rien pour le moment";
        $http.get("http://localhost:3001/users")
            .then(function (response) {
                console.log(response);
                vm.asyncDisplayData = response.data;
                vm.testAsyncAfter = response.data;
            }).catch(function (error) {
                console.error(error);
            });
        // Le serveur n'a pas eu le temps de terminé l'appel http et met sa valeur de départ 
        vm.testAsyncBefore = vm.asyncDisplayData;
    };
};