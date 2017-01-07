angular
    .module('app.film', [])
    .directive('films', function () {
        return {
            controller: 'films',
            template: require('./film.component.html'),
            scope: {
                array: '='
            },
            link: function (scope, element, attrs) {

            }
        };
    }).controller('films', [
    '$scope', function ($scope) {

    }
])
;