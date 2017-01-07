angular
    .module('users.service', [])
    .service('usersService', ['jsendService', 'config', function (jsendService, config) {
        return {
            add: function (data, callback) {
                return jsendService.http({
                    method: 'POST',
                    data: JSON.stringify(data),
                    headers: {'Content-Type': 'application/json'},
                    url: config.apiUrl + "/users/add"
                }, callback);
            },
            login: function (data, callback) {
                return jsendService.http({
                    method: 'POST',
                    data: JSON.stringify(data),
                    headers: {'Content-Type': 'application/json'},
                    url: config.apiUrl + "/users/login"
                }, callback);
            },
            logout: function (callback) {
                return jsendService.http({
                    method: 'GET',
                    url: config.apiUrl + "/users/logout"
                }, callback);
            },
            info: function (callback) {
                return jsendService.http({
                    method: 'GET',
                    url: config.apiUrl + "/users/info"
                }, callback);
            }

        }
    }]);
