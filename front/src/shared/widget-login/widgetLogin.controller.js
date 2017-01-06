angular
    .module('app.widgetLogin', [])
    .directive('widgetLogin', function () {
        return {
            controller: 'widgetLogin',
            template: require('./widgetLogin.component.html'),
            scope: {},
            link: function (scope, element, attrs) {

            }
        };
    }).controller('widgetLogin', [
    '$scope', 'usersService', '$rootScope', 'errorCallbackProvider',
    function ($scope, usersService, $rootScope, errorCallbackProvider) {
        $scope.form = {};

        $scope.submit = function () {
            usersService.add($scope.form)
                .then(function successCallback(response) {
                    var output = response.data;
                    var status = output.status;
                    if (status == "success") {
                        $rootScope.user = output.data;
                    }
                }, function errorCallback(response) {
                    errorCallbackProvider(response);
                })
        }
    }
])
;