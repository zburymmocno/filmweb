angular
    .module('api.provider', [])
    .provider('apiProvider', function ApiProvider() {
        var apiBaseUrl = 'http://localhost/filmweb/api/index.php';

        this.setApiBaseUrl = function (url) {
            apiBaseUrl = url;
        };

        this.$get = function () {
            return function() {
                return apiBaseUrl;
            }
        }


    });
