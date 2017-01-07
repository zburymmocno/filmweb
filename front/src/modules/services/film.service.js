angular
    .module('film.service', [])
    .service('filmService', ['$http', 'apiProvider', function ($http, apiProvider) {
        return {
            getAll: function () {
                return $http({
                    method: 'GET',
                    url: apiProvider() + "/films"
                });
            },

            get: function (id) {
                return $http({
                    method: 'GET',
                    url: apiProvider() + "/films/" + id
                });
            },

            add: function (data) {
                return $http({
                    method: 'POST',
                    data: JSON.stringify(data),
                    url: apiProvider() + "/films/add",
                    headers: {'Content-Type': 'application/json'}
                });
            },
            edit: function (id, data) {
                return $http({
                    method: 'POST',
                    data: JSON.stringify(data),
                    url: apiProvider() + "/films/edit/" + id,
                    headers: {'Content-Type': 'application/json'}
                });
            }
        }

    }]);