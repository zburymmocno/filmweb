angular.module('app.mainCtrl', [
    'ui.router'
])
    .config([
        '$stateProvider', function ($stateProvider) {
            $stateProvider.state('home', {
                name: 'home',
                url: '/',
                controller: 'homeCtrl',
                template: require('./home.component.html')
            })
        }
    ]).controller('homeCtrl', [
    '$scope', 'filmService', 'errorCallbackProvider', function ($scope, filmService, errorCallbackProvider) {
        filmService.getAll()
            .then(function successCallback(response) {
                var output = response.data;
                var status = output.status;
                if (status == "success") {
                    $scope.films = output.data;

                } else if (status == "fail") {
                    alert(output.data.message);
                }
            }, function errorCallback(response) {
                errorCallbackProvider(response);
            });
    }])
;