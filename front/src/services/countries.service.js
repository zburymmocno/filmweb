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
                    url: apiProvider() + "/films/add"
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
