'use strict';

// Declare app level module which depends on views, and core components
angular.module('myApp', [
  'ngRoute',
  'myApp.testRoute'
]).
  config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix('!');

    $routeProvider
      .when('/color', {
        templateUrl: 'color/color.html',
        controller: 'ColorController as color'
      })
      .when('/todo', {
        templateUrl: 'todo-list/todo-list.html',
        controller: 'TodoListController as todoList'
      })
      .when('/test-route/:id', {
        templateUrl: 'test-route/test-route.html',
        controller: 'TestRouteController as testRoute'
      })
      .when('/user', {
        templateUrl: 'user/user.html',
        controller: 'UserController as user'
      })
      .when('/user-with-service', {
        templateUrl: 'user-with-service/user-with-service.html',
        controller: 'UserWithServiceController as userWithService'
      })
      .otherwise({ redirectTo: '/color' });
  }]);
