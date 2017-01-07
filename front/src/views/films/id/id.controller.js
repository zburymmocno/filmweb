angular.module('app.filmsId', [
    'ui.router'
])
    .config([
        '$stateProvider', function ($stateProvider) {
            $stateProvider.state('films', {
                url: '/films/{id}',
                controller: 'filmsIdCtrl',
                template: require('./id.component.html')
            })
        }
    ])
    .controller('filmsIdCtrl',
        ['$scope', '$stateParams', 'filmService', 'user',
            function ($scope, $stateParams, filmService, user) {
                var id = $stateParams.id;

                $scope.user = user;

                filmService.get(id, {
                    success: function (data) {
                        $scope.film = data;
                    }
                })
            }])
;