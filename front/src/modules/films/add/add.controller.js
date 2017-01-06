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
        ['$scope', 'filmService', 'countriesService', 'genresService', 'errorCallbackProvider',
            function ($scope, filmService, countriesService, genresService, errorCallbackProvider) {
                $scope.form = {};

                countriesService.getAll()
                    .then(function successCallback(response) {
                        var output = response.data;
                        var status = output.status;
                        console.log(response);

                        if (status == "success") {
                            $scope.countries = output.data;
                        } else if (status == "fail") {
                            alert("Error - check console");
                            console.log(output.data);
                        }
                    }, function errorCallback(response) {
                        errorCallbackProvider(response);
                    });

                genresService.getAll()
                    .then(function successCallback(response) {
                        var output = response.data;
                        var status = output.status;
                        if (status == "success") {
                            $scope.genres = output.data;

                        } else if (status == "fail") {
                            alert("Error - check console");
                            console.log(output.data);
                        }
                    }, function errorCallback(response) {
                        errorCallbackProvider(response);
                    });

                $scope.send = function () {
                    console.log($scope.form);
                    filmService.add($scope.form)
                        .then(function (response) {
                            console.log(response);
                        }, function (response) {
                            errorCallbackProvider(response);
                        });
                };
            }])
;