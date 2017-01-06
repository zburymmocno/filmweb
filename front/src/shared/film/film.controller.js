angular
    .module('app.film', [])
    .directive('film', function () {
        return {
            controller: 'film',
            template: require('./film.component.html'),
            scope: {
                details: '='
            },
            link: function (scope, element, attrs) {

            }
        };
    }).controller('film', [
    '$scope', function ($scope) {
        
    }
])
;