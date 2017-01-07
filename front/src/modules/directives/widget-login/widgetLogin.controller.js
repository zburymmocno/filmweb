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
    '$scope', 'usersService', '$rootScope', 'errorCallbackProvider', 'toastService',
    function ($scope, usersService, $rootScope, errorCallbackProvider, toastService) {
        $scope.form = {};



        $scope.submit = function () {
            usersService.login($scope.form)
                .then(function successCallback(response) {
                    var output = response.data;
                    var status = output.status;
                    if (status == "success") {
                        $rootScope.user = output.data;
                    }

                    console.log(response);
                }, function errorCallback(response) {
                    errorCallbackProvider(response);
                })
        }
    }
])
;