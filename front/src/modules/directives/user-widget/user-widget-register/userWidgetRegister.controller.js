angular
    .module('userWidget.widgetRegister', [])
    .directive('userWidgetRegister', function () {
        return {
            controller: 'userWidgetRegisterCtrl',
            template: require('./userWidgetRegister.component.html'),
            scope: {},
            link: function (scope, element, attrs) {

            }
        };
    }).controller('userWidgetRegisterCtrl', [
    '$scope', 'usersService', 'toastService', 'userWidgetView',
    function ($scope, usersService, toastService, userWidgetView) {
        $scope.form = {};

        $scope.goToLogin = function () {
            userWidgetView.view = 0;
        };

        $scope.submit = function () {
            usersService.add($scope.form, {
                success: function () {
                    toastService.success("Rejestracja przebiegła pomyślnie! Możesz teraz się zalogować.");
                },
                error: function () {
                    toastService.error("Wprowadzone dane są nieprawidłowe!");
                }
            });
        }
    }
])
;