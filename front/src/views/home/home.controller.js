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

        $scope.showSearch = false;

        $scope.toggleSearch = function () {
            if ($scope.showSearch)
                $scope.showSearch = false;
            else
                $scope.showSearch = true;
        };

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
            }
        });

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
                    
                }
            });
        }
    }])
;