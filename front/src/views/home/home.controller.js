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
        $scope.displayFilms = {};
        $scope.showSearch = false;
        $scope.found = true;

        $scope.$watch('showSearch', function (newValue, oldValue) {
            if (newValue) {
                //search
                $scope.getFilteredFilms();
            } else {
                //all films
                $scope.getAllFilms();
            }
        });


        $scope.toggleSearch = function () {
            $scope.showSearch = !$scope.showSearch;
        };

        $scope.getFilteredFilms = function () {
            filmService.filters($scope.search, {
                success: function (data) {
                    $scope.displayFilms = data;
                    $scope.found = true;
                },
                error: function (data) {
                    $scope.found = false;
                },
                fails: function (data) {
                    $scope.found = false;
                }
            });
        };

        $scope.getAllFilms = function () {
            $scope.found = true;
            filmService.getAll({
                success: function (data) {
                    $scope.displayFilms = data;
                }
            });
        };
        $scope.getSearchFields = function () {
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
        };
        $scope.getAllFilms();
        $scope.getSearchFields();
    }])
;