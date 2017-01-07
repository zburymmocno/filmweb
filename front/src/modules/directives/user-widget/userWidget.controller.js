angular
    .module('userWidget', [
        'userWidget.widgetRegister',
        'userWidget.widgetLogin',
        'userWidget.widgetPanel'
    ])
    .value('userWidgetView', 0)

    .directive('userWidget', function () {
        return {
            controller: 'widgetWidgetCtrl',
            template: require('./userWidget.component.html'),
            scope: {},
            link: function (scope, element, attrs) {

            }
        };
    }).controller('widgetWidgetCtrl', [
    '$scope', 'userWidgetView',
    function ($scope, userWidgetView) {
        $scope.view = userWidgetView;
        
        $scope.check = function () {
            console.log(userWidgetView);
        }
    }
])
;