angular
    .module('app', [
        'ui.router',
        'ngMaterial',

        'api.provider',
        'errorCallback.provider',

        'ngAnimate',
        'app.pageNav',
        'app.sideBar',
        'app.filmsCards',
        'app.alert',
        
        'jsend.service',
        'toast.service',
        'countries.service',
        'genres.service',
        'film.service',
        'users.service',

        'userWidget',


        'app.filmsAdd',
        'app.filmsId',
        'app.filmsEdit',
        'app.mainCtrl'

    ])
    .config([
        '$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.otherwise('/')
        }
    ])
    .constant('config', {
        apiUrl: 'http://localhost/filmweb/api/index.php'
    })

    .value('user', {
        isLogged: false,
        data: {
            role: 'admin',
            privileges: {
                edit: true,
                add: true
            }
        }
    })


;




