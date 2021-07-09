"use strict";

angular
    .module("myApp")
    .directive("appDisplayValues", appDisplayValues);

function appDisplayValues() {
    var directive = {
        restrict: "EA",
        scope: {
            valUn: "=valHtmlUn",
            valDeux: "=valHtmlDeux",
        },
        template: "<p>{{valUn}} + {{valDeux}} = {{valUn + valDeux}}</p>"
    }
    return directive;
}