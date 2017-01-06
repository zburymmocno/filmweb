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
    .controller('filmsAddCtrl', ['$scope', 'apiProvider', function ($scope, apiProvider) {
        $scope.form = {};

        console.log(apiProvider());

        $scope.send = function () {
            console.log($scope.form);
        };
                
        $scope.genres = [
            "Komedia", "Horror"
        ];

        $scope.countries = [
            "Polska", "Warszawa"
        ]
    }])
;