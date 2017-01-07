angular
    .module('toast.service', [])
    .service('toastService', ['$mdToast', function ($mdToast) {

        var show = function (template, className, action, callback) {
            return $mdToast.show({
                    template: '<md-toast>' + template + '</md-toast>',
                    hideDelay: 3000,
                    position: 'top right',
                    toastClass: className,
                    action: action
                }
            ).then(function (response) {
                if (response == 'ok') {
                    if (typeof callback == 'function') {
                        callback();
                    }
                }
            })
        };
        var error = function (message, action, callback) {
            return show(message, 'error', action, callback)
        };
        var errorConnection = function () {
            return error('Nie można nawiązać połączenia z serwerem! Proszę spróbować za chwilę!');
        };
        var success = function (message, action, callback) {
            return show(message, 'success', action, callback)
        };
        var fail = function (message, action, callback) {
            return show(message, 'fail', action, callback)
        };


        return {
            error: error,
            errorConnection: errorConnection,
            success: success,
            fail: fail

        }
    }
    ])
;