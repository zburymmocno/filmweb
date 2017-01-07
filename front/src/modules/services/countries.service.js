angular
    .module('countries.service', [])
    .service('countriesService', ['$http', 'apiProvider', function ($http, apiProvider) {

        return {
            getAll: function () {
                return $http({
                    method: 'GET',
                    url: apiProvider() + "/countries"
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
            delete: function (id) {
                return $http({
                    method: 'GET',
                    url: apiProvider() + "/films/remove/" + id
                });
            }
        }

    }]);
