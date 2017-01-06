angular.module('app.filmsId', [
    'ui.router'
])
    .config([
        '$stateProvider', function ($stateProvider) {
            $stateProvider.state('filmsId', {
                name: 'filmsId',
                url: '/films/{id}',
                controller: 'filmsIdCtrl',
                template: require('./id.component.html')
            })
        }
    ])
    .controller('filmsIdCtrl', ['$scope', '$stateParams', 'filmService', 'errorCallbackProvider', function ($scope, $stateParams, filmService, errorCallbackProvider) {
        var id = $stateParams.id;

        $scope.response =
            JSON.parse(
                '{"status":"success","data":{"film_id":"43","tytul":"Co robimy w ukryciu","rok_premiery":"2015","opis":"","url_p":"http:\/\/1.fwcdn.pl\/po\/72\/86\/707286\/7673270.4.jpg","url_z":"http:\/\/m.filmweb.pl\/video\/zwiastun\/nr+1+%28polski%29-35083","gatunki":[{"nazwa":"Horror"},{"nazwa":"Komedia"}],"kraje":[{"nazwa":"USA"}]}}'
            );
        $scope.film = $scope.response.data;

        filmService.get(id)
            .then(function successCallback(response) {
                var output = response.data;
                var status = output.status;
                if (status == "success") {
                    $scope.film = output.data;

                } else if (status == "fail") {
                    alert("Error - check console");
                    console.log(output.data);
                }
            }, function errorCallback(response) {
                errorCallbackProvider(response);
            });


    }])
;