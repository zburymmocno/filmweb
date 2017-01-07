angular
    .module('userWidget', [
        'userWidget.widgetRegister',
        'userWidget.widgetLogin',
        'userWidget.widgetPanel'
    ])
    .value('userWidgetView', {
        view: 0,
        setLogin: function () {
            this.view = 0;
        },
        setRegister: function () {
            this.view = 2;
        },
        setPanel: function () {
            this.view = 1;
        }
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
    '$scope', 'userWidgetView', 'user',
    function ($scope, userWidgetView, user) {
        $scope.widget = userWidgetView;
    }
])
;