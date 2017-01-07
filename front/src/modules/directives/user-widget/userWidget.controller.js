angular
    .module('userWidget', [
        'userWidget.widgetRegister',
        'userWidget.widgetLogin',
        'userWidget.widgetPanel'
    ])
    .value('userWidgetView', {
        view: 0
    })

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
        $scope.widget = userWidgetView;

        
        $scope.check = function () {
            console.log(userWidgetView);
            console.log("SCope");
            console.log($scope.widget);
        }
    }
])
;