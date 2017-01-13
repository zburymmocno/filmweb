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
        $scope.allFilms = {};
        $scope.displayFilms = {};
        $scope.searchFilms = {};
        $scope.search = {};
        $scope.showSearch = false;

        $scope.$watch('showSearch', function (newValue, oldValue) {
            if (newValue) {
                $scope.displayFilms = $scope.searchFilms;
            } else {
                $scope.displayFilms = $scope.allFilms;
            }
        });

        $scope.toggleSearch = function () {
            $scope.showSearch = !$scope.showSearch;
        };
        $scope.sendFilters = function () {
            console.log("Dane wysłane");
            console.log($scope.search);
            filmService.filters($scope.search, {
                success: function (data) {
                    console.log("Success");
                    console.log(data);
                    $scope.searchFilms = data;
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
                    $scope.allFilms = data;
                }
            });
        })();
    }])
;