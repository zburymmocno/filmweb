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
        ['$scope', 'filmService', 'countriesService', 'genresService', 'toastService', '$state',
            function ($scope, filmService, countriesService, genresService, toastService, $state) {
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
                    filmService.add($scope.form, {
                        success: function () {
                            toastService.success("Film został dodany poprawnie");
                            $state.go('home');
                        }
                    });
                };
            }])
;