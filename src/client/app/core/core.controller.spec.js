/**
 * Created by dpavao on 3/23/15.
 */
describe('core.controller', function () {
    var scope,
        controller;

    beforeEach(module('app'));
    beforeEach(inject(function ($controller, $rootScope) {
        scope = $rootScope.$new();
        controller = $controller('CoreController', {
            $scope: scope
        });
    }));

    it ('should inject $http', inject(function ($http) {
        expect(controller.$http).to.equal($http);

    }));
});
