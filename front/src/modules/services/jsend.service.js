angular
    .module('jsend.service', [])
    .service('jsendService', ['$http', 'toastService', function ($http, toastService) {
        var http = function (config, callback) {
            return $http(config)
                .then(function (response) {
                    connect(response, callback)
                }, function (response) {
                    alert('ERROR WITH CONNECTION TO SERVER');
                });
        };
        var connect = function (response, callback) {
            var output = response.data;
            var status = output.status;
            var data = output.data;
            var message = output.message;
            var code = output.code;

            var config = angular.extend({
                success: function () {
                },
                error: function () {
                },
                fail: function () {
                }
            }, callback);

            if (status == "success") {
                config.success(data);
                toastService.success("Pobrano dane!");
            } else if (status == "error") {
                config.error(data);
                toastService.error("Error");

            } else if (status == "fail") {
                config.fail(message, data, code);
                toastService.fail("FAIL!!!");
            } else {
                throw ("Nie znany typ odpowiedzi");
            }
        };

        return {
            http: http
        }
    }]);
