"use strict";

angular
    .module("myApp")
    .service("UserWebService", UserWebService);

UserWebService.inject = ["$http", "UrlApi"];

function UserWebService($http, UrlApi) {

    this.getServer = function () {
        return $http.get(UrlApi)
            .then(function (response) {
                console.log(response);
                return response.data;
            }).catch(function (error) {
                console.error(error);
            });
    }

}