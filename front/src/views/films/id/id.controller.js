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
    .controller('filmsIdCtrl', ['$scope', '$stateParams', 'filmService', 'errorCallbackProvider',
        function ($scope, $stateParams, filmService, errorCallbackProvider) {
            var id = $stateParams.id;

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