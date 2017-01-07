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
    '$scope', 'usersService', '$rootScope', 'errorCallbackProvider', 'toastService',
    function ($scope, usersService, $rootScope, errorCallbackProvider, toastService) {
        $scope.form = {};

        $scope.showToast = function () {
            toastService.show('error', "To jest error", "To jest akcja", function () {

            });
        };


        $scope.submit = function () {
            usersService.add($scope.form)
                .then(function successCallback(response) {
                    var output = response.data;
                    var status = output.status;
                    if (status == "success") {
                        $rootScope.user = output.data;
                        toastService.success("Rejestracja przebiegła pomyślnie! Możesz teraz się zalogować.");
                    } else if (status == "error") {
                        toastService.error("Wprowadzone dane są nieprawidłowe!");
                    }
                }, function () {
                    toastService.errorConnection();
                })
        }
    }
])
;