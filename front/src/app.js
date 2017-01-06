angular
    .module('app', [
        'ui.router',
        
        'api.provider',

        'ngAnimate',
        'app.pageNav',
        'app.sideBar',
        'app.film',
        
        'film.service',

        'app.filmsAdd',
        'app.mainCtrl'

    ])
    .config([
        '$stateProvider' , function ($stateProvider) {

        }
    ])
;




