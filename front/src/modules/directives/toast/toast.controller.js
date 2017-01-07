angular
    .module('app.alert', [])
    .directive('alert', function () {
        return {
            controller: 'toastCtrl',
            template: require('./toast.component.html'),
            scope: {},
            link: function (scope, element, attrs) {

            }
        };
    }).controller('toastCtrl', [
    '$scope', '$mdToast', '$mdDialog', function ($scope, $mdToast, $mdDialog) {
        var isDlgOpen;
        $scope.closeToast = function () {
            if (isDlgOpen) return;

            $mdToast
                .hide()
                .then(function () {
                    isDlgOpen = false;
                });
        };

        $scope.openMoreInfo = function (e) {
            if (isDlgOpen) return;
            isDlgOpen = true;

            $mdDialog
                .show($mdDialog
                    .alert()
                    .title('More info goes here.')
                    .textContent('Something witty.')
                    .ariaLabel('More info')
                    .ok('Got it')
                    .targetEvent(e)
                )
                .then(function () {
                    isDlgOpen = false;
                })
        };
    }
])
;