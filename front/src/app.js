angular
    .module('app', [
        'ui.router',
        'ngMaterial',

        'api.provider',
        'errorCallback.provider',

        'ngAnimate',
        'app.pageNav',
        'app.sideBar',
        'app.film',
        'app.alert',

        //import
        'toast.service',

        'app.widgetLogin',
        'app.widgetRegister',

        'users.service',

        'countries.service',
        'genres.service',
        'film.service',

        'app.filmsAdd',
        'app.filmsId',
        'app.filmsEdit',
        'app.mainCtrl'

    ])
    .config([
        '$stateProvider', function ($stateProvider) {

        }
    ])

    .run(['$rootScope', 'usersService', 'errorCallbackProvider', function ($rootScope, usersService, errorCallbackProvider) {
            usersService.info()
                .then(function successCallback() {
                    var output = response.data;
                    var status = output.status;
                    if (status == 'success') {
                        $rootScope.user = output.data
                    } else if (status == "error") {
                        $rootScope.user = {};
                    }
                }, function errorCallback(response) {
                    errorCallbackProvider(response);
                });
        }]
    )
;




