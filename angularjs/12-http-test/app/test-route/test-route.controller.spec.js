'use strict';

describe('myApp.testRoute module', function () {

    beforeEach(module('myApp.testRoute'));

    var testRouteCtrl;

    describe('test-route controller', function () {

        beforeEach(inject(function ($controller) {
            var routeParams = {};
            testRouteCtrl = $controller('TestRouteController', { '$routeParams': routeParams });
        }));

        it('should be instanciated', inject(function ($controller) {
            // GIVEN

            // THEN
            expect(testRouteCtrl).toBeDefined();
        }));

        describe('addCount', function () {
            it('when add count then count was incremented', inject(function ($controller) {
                // GIVEN
                testRouteCtrl.count = 0;

                // WHEN
                testRouteCtrl.addCount();

                // THEN
                expect(testRouteCtrl.count).toBe(1);
            }));
        });

        describe('addElementInTable', function () {
            it('when addElementInTable with text then one element more in table', inject(function ($controller) {
                // GIVEN
                testRouteCtrl.table = ["Test1", "Test2"];

                // WHEN
                testRouteCtrl.addElementInTable("Test3");

                // THEN
                expect(testRouteCtrl.table.length).toBe(3);
                expect(testRouteCtrl.table[2]).toBe("Test3");
            }));

            it('when addElementInTable with empty string then no element more in table', inject(function ($controller) {
                // GIVEN
                testRouteCtrl.table = ["Test1", "Test2"];

                // WHEN
                testRouteCtrl.addElementInTable("");

                // THEN
                expect(testRouteCtrl.table.length).toBe(2);
                expect(testRouteCtrl.table[2]).toBeUndefined();
            }));
        });
    });
});