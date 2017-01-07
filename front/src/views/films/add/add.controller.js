angular.module('app.filmsAdd', [
    'ui.router'
])
    .config([
        '$stateProvider', function ($stateProvider) {
            $stateProvider.state('filmsAdd', {
                name: 'filmsAdd',
                url: '/films/add',
                controller: 'filmsAddCtrl',
                template: require('./add.component.html')
            })
        }
    ])
    .controller('filmsAddCtrl',
        ['$scope', 'filmService', 'countriesService', 'genresService',
            function ($scope, filmService, countriesService, genresService) {
                $scope.form = {};
                $scope.genres = {};
                $scope.countries = {};

                countriesService.getAll({
                    success: function (data) {
                        $scope.countries = data;
                    }
                });

                genresService.getAll({
                    success: function (data) {
                        $scope.genres = data;
                    }
                });

                $scope.send = function () {
                    filmService.add($scope.form);
                };
            }])
;