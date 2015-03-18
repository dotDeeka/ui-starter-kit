/**
 * Created by dpavao on 3/18/15.
 */


class AppController {
    static $inject = ['$router'];

    private $router;

    constructor($router) {
        this.$router = $router;
        this.bindRoutes();
    }

    private bindRoutes() {
        this.$router.config([
            {path: '', redirectTo: '/main'},
            {path: '/', redirectTo: '/main'},
            {path: '/main', component: 'main'}
        ]);
    }
}

angular.module('app').controller('AppController', AppController);
