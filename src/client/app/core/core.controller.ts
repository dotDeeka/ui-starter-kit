/**
 * Created by dpavao on 3/16/15.
 */
class CoreController {

    static $inject = ['$http'];

    private $http;

    constructor($http) {
        this.$http = $http;
    }

}

angular.module('app.core').controller('CoreController', CoreController);
