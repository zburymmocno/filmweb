angular.module('app.filmsEdit', [
    'ui.router'
])
    .config([
        '$stateProvider', function ($stateProvider) {
            $stateProvider.state('filmsEdit', {
                name: 'filmsEdit',
                url: '/films/edit/{id}',
                controller: 'filmsEditCtrl',
                template: require('./edit.component.html')
            })
        }
    ])
    .controller('filmsEditCtrl',
        ['$scope', 'filmService', 'countriesService', 'genresService', '$stateParams','toastService',
            function ($scope, filmService, countriesService, genresService, $stateParams, toastService) {
                $scope.form = {};
                var id = $stateParams.id;

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

                filmService.get(id, {
                    success: function (data) {
                        console.log("POBBRANO");
                        console.log(data);
                        $scope.form = data;
                    }
                });

                $scope.send = function () {
                    filmService.edit(id, $scope.form, {
                        success: function () {
                            toastService.success("FIlm został zaktualizowany");
                        }
                    })
                };
            }])
;