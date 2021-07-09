"use strict";

angular
    .module("myApp")
    .directive("appTestDirective", appTestDirective);

function appTestDirective() {
    var directive = {
        restrict: "EAC", // préférer le E. EA par défaut.
        template: "<p>Test</p>"
    }
    return directive;
}