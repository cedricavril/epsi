"use strict";

angular
    .module("myApp")
    .controller("TableController", ['orderByFilter', tableController]);

    tableController.inject = 'orderByFilter';

function tableController(orderBy) {
    var vm = this;

    vm.friends = [
        {name: 'John',   phone: '555-1212',  age: 10},
        {name: 'Mary',   phone: '555-9876',  age: 19},
        {name: 'Mike',   phone: '555-4321',  age: 21},
        {name: 'Adam',   phone: '555-5678',  age: 35},
        {name: 'Julie',  phone: '555-8765',  age: 29}
    ];
    
    vm.propertyName = 'age';
    vm.reverse = true;
    vm.friends = orderBy(vm.friends, vm.propertyName, vm.reverse);
    
    vm.sortBy = function(propertyName) {
        vm.reverse = (propertyName !== null && vm.propertyName === propertyName)
            ? !vm.reverse : false;
        vm.propertyName = propertyName;
        vm.friends = orderBy(vm.friends, vm.propertyName, vm.reverse);
    };
}








    
// function tableController() {
//     var vm = this;
//     vm.tri = 2;

//     vm.troisDTable = [{premierString:'John', deuxiemeString:'555-1276', nombre:20},
//     {premierString:'Mary', deuxiemeString:'800-BIG-MARY', nombre:22},
//     {premierString:'Mike', deuxiemeString:'555-4321', nombre:24},
//     {premierString:'Adam', deuxiemeString:'555-5678', nombre:23},
//     {premierString:'Julie', deuxiemeString:'555-8765', nombre:21},
//     {premierString:'Juliette', deuxiemeString:'555-5678', nombre:26}];

//     vm.premiersStrings = ['John', 'Mary', 'Mike', 'Adam'];

//     console.log(vm.troisDTable);

//     vm.tri = function(colomne) {
//         switch (colomne) {
//         case 1:
//             vm.tri = '+premierString';
//             break;
//         case 2:
//             vm.tri = '+number';
//             break;
//         case 3:
//             break;
//         default:
//             break;
//         }

//     };


// }