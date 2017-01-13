angular
    .module('jsend.service', [])
    .service('jsendService', ['$http', 'toastService', '$filter',
        function ($http, toastService, $filter) {
            var http = function (config, callback) {
                console.log("Dane wysłane na serwer");
                console.log(config.data);
                return $http(config)
                    .then(function (response) {
                        connect(response, callback)
                    }, function (response) {
                        console.log(response);
                        toastService.error("Serwer nie odpowiada! Sprawdź konsole!");
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

                console.log("odpowiedz serwer");
                console.log(response);

                if (status == "success") {
                    config.success(data);
                } else if (status == "error") {
                    config.error(data);
                } else if (status == "fail") {
                    config.fail(message, data, code);
                } else {
                    throw ("Nie znany typ odpowiedzi");
                }
            };

            return {
                http: http
            }
        }]);
