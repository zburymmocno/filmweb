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
    .controller('filmsAddCtrl', ['$scope', 'filmService' ,'countriesService', 'genresService', 'errorCallbackProvider', function ($scope, countriesService, filmService,genresService, errorCallbackProvider) {
        $scope.form = {};
        countriesService.getAll()
            .then(function successCallback(response) {
                var output = response.data;
                var status = output.status;
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
            filmService.add($scope.form)
                .then(function (response) {
                    alert("poszło");
                    console.log(response);
                }, function (reponse) {
                    errorCallbackProvider(response);
                });



        };

        $scope.genres = [
            {
                "nazwa": "ggegeg"
            }, {
                "nazwa": "gggggg"
            }
        ];

        $scope.countries = [
            {
                "nazwa": "coun"
            }, {
                "nazwa": "counasds"
            }
        ]
    }])
;