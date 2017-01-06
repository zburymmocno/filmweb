angular
    .module('app.alert', [])
    .directive('alert', function () {
        return {
            controller: 'alert',
            template: require('./alert.component.html'),
            scope: {
                message: '@',
                type: '@'
            },
            link: function (scope, element, attrs) {

            }
        };
    }).controller('alert', [
    '$scope', function ($scope) {

    }
])
;