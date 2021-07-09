"use strict";

angular
    .module("myApp")
    .directive("appCountDisplay", appCountDisplay);

function appCountDisplay() {
    var directive = {
        restrict: "EA",
        scope: {
            count: "=count"
        },
        template: "<p>Hello {{count}}</p>"
    }
    return directive;
}