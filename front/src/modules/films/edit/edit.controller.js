angular.module('app.filmsEdit', [
    'ui.router'
])
    .config([
        '$stateProvider', function ($stateProvider) {
            $stateProvider.state('filmsEdit', {
                name: 'filmsAdd',
                url: '/films/edit/{id}',
                controller: 'filmsEditCtrl',
                template: require('./edit.component.html')
            })
        }
    ])
    .controller('filmsEditCtrl',
        ['$scope', 'filmService', 'countriesService', 'genresService', 'errorCallbackProvider', '$stateProvider',
            function ($scope, filmService, countriesService, genresService, errorCallbackProvider, $stateProvider) {
                $scope.form = {};
                var id = $stateProvider.id;

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

                filmService.get(id)
                    .then(function (response) {
                        $scope.form = response.data.data;
                    }, function (response) {
                        errorCallbackProvider(response);
                    });

                $scope.send = function () {
                    console.log($scope.form);
                    filmService.edit(id, $scope.form)
                        .then(function (response) {
                            console.log(response);
                        }, function (response) {
                            errorCallbackProvider(response);
                        });
                };
            }])
;