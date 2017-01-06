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
    '$scope', 'filmService', function ($scope, filmService) {
        filmService.getAll()
            .then(function successCallback(response) {
                console.log(response);
                if (response.status == "success")
                    $scope.films = response.data;
                else {
                    alert("respnse status fails");
                }
            })
            .then(function errorCallback(response) {
                console.log(response);
                alert(response);
            });
    }])
;