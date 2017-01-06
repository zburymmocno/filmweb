angular
    .module('app.widgetRegister', [])
    .directive('widgetRegister', function () {
        return {
            controller: 'widgetRegister',
            template: require('./widgetRegister.component.html'),
            scope: {},
            link: function (scope, element, attrs) {

            }
        };
    }).controller('widgetRegister', [
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
                    console.log(response);
                }, function errorCallback(response) {
                    errorCallbackProvider(response);
                })
        }
    }
])
;