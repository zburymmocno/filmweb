angular
    .module('users.service', [])
    .service('usersService', ['$http', 'apiProvider', function ($http, apiProvider) {
        return {
            add: function (data) {
                return $http({
                    method: 'POST',
                    data: data,
                    url: apiProvider() + "/users/add"
                });
            },
            login: function (data) {
                return $http({
                    method: 'POST',
                    data: data,
                    url: apiProvider() + "/users/login"
                });
            },
            logout: function () {
                return $http({
                    method: 'GET',
                    url: apiProvider() + "/users/logout"
                });
            },
            info: function () {
                return $http({
                    method: 'GET',
                    url: apiProvider() + "/users/info"
                });
            }

        }
    }]);
