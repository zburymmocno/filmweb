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
        ['$scope', 'filmService', 'countriesService', 'genresService', '$stateParams', 'toastService',
            function ($scope, filmService, countriesService, genresService, $stateParams, toastService) {
                $scope.form = {};

                var id = $stateParams.id;


                $scope.send = function () {
                    filmService.edit(id, $scope.form, {
                        success: function () {
                            toastService.success("FIlm został zaktualizowany");
                        }
                    })
                };

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
                        $scope.form = data;
                        angular.extend($scope.countries, $scope.form.kraje);
                        angular.extend($scope.genres, $scope.form.gatunki);
                    }
                });
            }])
;