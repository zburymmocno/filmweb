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
    '$scope', 'filmService', '$filter', 'genresService', 'countriesService',
    function ($scope, filmService, $filter, genresService, countriesService) {
        $scope.films = {};
        $scope.search = {};
        $scope.displayFilms = {};
        $scope.showSearch = false;

        $scope.$watch('showSearch', function (newValue, oldValue) {
            if (newValue) {
                $scope.displayFilms = $scope.search;
            } else {
                $scope.displayFilms = $scope.films;
            }
        });

        $scope.toggleSearch = function () {
            $scope.showSearch = !$scope.showSearch;
        };
        $scope.sendFilters = function () {
            console.log("Dane wysłane");
            console.log($scope.search);
            filmService.filters({
                success: function (data) {
                    console.log("Dane odebrane");
                    console.log(data);
                    $scope.search = data;
                },
                error: function (data) {
                    console.log("ERROR");
                    console.log(data);
                },
                fails: function (data) {
                    console.log("FAIL");
                    console.log(data);
                }
            });
        };

        (function () {
            genresService.getAll({
                success: function (data) {
                    $scope.genres = data;
                }
            });
            countriesService.getAll({
                success: function (data) {
                    $scope.countries = data;
                }
            });
            filmService.getAll({
                success: function (data) {
                    $scope.films = data;
                    $scope.displayFilms = $scope.films;
                }
            });
        })();
    }])
;