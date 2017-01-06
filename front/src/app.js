angular
    .module('app', [
        'ui.router',

        'api.provider',
        'errorCallback.provider',

        'ngAnimate',
        'app.pageNav',
        'app.sideBar',
        'app.film',

        'film.service',

        'app.filmsAdd',
        'app.filmsId',
        'app.mainCtrl'

    ])
    .config([
        '$stateProvider', function ($stateProvider) {

        }
    ])
;




