angular
    .module('app.pageNav', [])
    .directive('pageNav', function () {
        return {
            controller: 'pageNav',
            template: require('./pageNav.component.html'),
            scope: {},
            link: function (scope, element, attrs) {

            }
        };
    }).controller('pageNav',
    ['$scope', 'user',
        function ($scope, user) {
            $scope.user = user;
        }
    ])
;