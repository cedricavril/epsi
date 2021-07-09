"use strict";

angular
    .module("myApp")
    .directive("appSpoiler", appSpoiler);

function appSpoiler() {
    var directive = {
        restrict: "EA",
        transclude: true,
        replace: true,
        scope: {
            textButton: "=textButton",
            textToDisplay: "=textToDisplay",
        },
        template: '<div>' +
            '<button ng-click="displayorHideText()">{{textButton}}</button>' +
            '<div class="body" ng-show="isDisplay">{{textToDisplay}}</div>' +
            '</div>',
        link: function (scope, element, attrs) {
            scope.isDisplay = false;
            scope.displayorHideText = function displayorHideText() {
                scope.isDisplay = !scope.isDisplay;
            };
        }
    }
    return directive;
}