angular
    .module('app.filmsCards', [])
    .directive('filmCards', function () {
        return {
            controller: 'filmCardsCtrl',
            template: require('./filmCards.component.html'),
            scope: {
                array: '='
            },
            link: function (scope, element, attrs) {

            }
        };
    }).controller('filmCardsCtrl', [
    '$scope', 'user',
    function ($scope, user) {
        $scope.user = user;
    }
])
;