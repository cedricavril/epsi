"use strict";

angular
    .module("myApp")
    .directive("appAddTwoValues", appAddTwoValues);

function appAddTwoValues() {
    var directive = {
        val1: 1,
        val2: 2,
        scope: {
            val1: "=val1",
            val2: "=val2",
        },
        template: "<p>{{val1}} + {{val2}}</p>"
    }
    return directive;
}