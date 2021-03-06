angular
    .module('userWidget.widgetLogin', [])
    .directive('userWidgetLogin', function () {
        return {
            controller: 'userWidgetLoginCtrl',
            template: require('./userWidgetLogin.component.html'),
            scope: {},
            link: function (scope, element, attrs) {

            }
        };
    }).controller('userWidgetLoginCtrl', [
    '$scope', 'usersService', 'toastService', 'user', 'userWidgetView',
    function ($scope, usersService, toastService, user, userWidgetView) {
        $scope.form = {};

        $scope.submit = function () {

            usersService.login($scope.form, {
                success: function (data) {
                    toastService.success("Zostałeś zalogowany!");
                    user.isLogged = true;
                    user.data = data;
                    userWidgetView.view = 1;
                    $scope.form = {};
                },
                error: function () {
                    toastService.error("Niepoprawne dane logowania!");
                }
            })
        }

        $scope.goToRegister = function () {
            userWidgetView.setRegister();
        }
    }
])
;