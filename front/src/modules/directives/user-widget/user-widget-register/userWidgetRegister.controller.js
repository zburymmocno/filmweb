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
    '$scope', 'usersService', 'toastService',
    function ($scope, usersService, toastService) {
        $scope.form = {};

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