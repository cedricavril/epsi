"use strict";

angular
    .module("myApp")
    .directive("appLoader", appLoader);

function appLoader() {
    var directive = {
        restrict: "EA",
        scope: {
            isDisplay: "=isDisplay"
        },
        template: "<div ng-show='isDisplay' class='loader'></div>"
    }
    return directive;
}