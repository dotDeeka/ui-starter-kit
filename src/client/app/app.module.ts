/**
 * Created by dpavao on 3/18/15.
 */

angular.module('app', [
    'app.core',
    'ngNewRouter'
]).config(config);


config.$inject = ['$componentLoaderProvider'];
function config ($componentLoaderProvider) {
    setControllerNameMapping($componentLoaderProvider);
}

function setControllerNameMapping($componentLoaderProvider) {
    $componentLoaderProvider.setTemplateMapping(function (name) {
        var dashName = dashCase(name);
        return 'app/route-components/' + dashName + '/' + dashName +'.html';
    });
}

function dashCase(str) {
    return str.replace(/([A-Z])/g, function ($1) {
        return '-' + $1.toLowerCase();
    });
}
