angular.module('app.mainCtrl', [
    'ui.router'
])
    .config([
        '$stateProvider', function ($stateProvider) {
            $stateProvider.state('home', {
                url: '/',
                controller: 'homeCtrl',
                template: require('./home.component.html')
            })
        }
    ]).controller('homeCtrl', [
    '$scope', 'filmService', 'toastService', function ($scope, filmService, toastService) {
        filmService.getAll({
            success: function (data) {
                $scope.films = data;
            }
        });
    }])
;