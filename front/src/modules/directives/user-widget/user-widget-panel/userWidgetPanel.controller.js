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
    '$scope', 'usersService', 'toastService', 'user', 'userWidgetView',
    function ($scope, usersService, toastService, user, userWidgetView) {
        $scope.form = {};
        $scope.user = user;

        $scope.logout = function () {
            usersService.logout({
                success: function () {
                    toastService.success("Zostałeś wylogowany!");
                    user.isLogged = false;
                    user.data = {};
                    userWidgetView.setLogin();
                }
            });
        };

    }
])
;