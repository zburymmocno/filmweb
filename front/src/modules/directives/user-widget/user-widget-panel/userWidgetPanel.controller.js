angular
    .module('userWidget.widgetPanel', [])
    .directive('userWidgetPanel', function () {
        return {
            controller: 'userWidgetPanelCtrl',
            template: require('./userWidgetPanel.component.html'),
            scope: {},
            link: function (scope, element, attrs) {

            }
        };
    }).controller('userWidgetPanelCtrl', [
    '$scope', 'usersService', 'toastService', 'user',
    function ($scope, usersService, toastService, user) {
        $scope.form = {};

        $scope.submit = function () {
            usersService.login($scope.form, {
                success: function (data) {
                    toastService.success("Zostałeś zalogowany!");
                    user.isLogged = true;
                    user.data = data;
                },
                error: function () {
                    toastService.error("Niepoprawne dane logowania!");
                }
            })
        }
    }
])
;