angular
    .module('app.filmsCard', [])
    .directive('filmsCard', function () {
        return {
            controller: 'filmsCardCtrl',
            template: require('./filmsCard.component.html'),
            scope: {
                films: '='
            },
            link: function (scope, element, attrs) {

            }
        };
    }).controller('filmsCardCtrl', [
    '$scope', 'user',
    function ($scope, user) {
        $scope.user = user;
    }
])
;