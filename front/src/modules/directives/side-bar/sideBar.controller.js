angular
    .module('app.sideBar', [])
    .directive('sideBar', function () {
        return {
            controller: 'sideBar',
            template: require('./sideBar.component.html'),
            scope: {},
            link: function (scope, element, attrs) {

            }
        };
    }).controller('sideBar', [
    '$scope', function ($scope) {
        
    }
])
;