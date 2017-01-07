angular
    .module('countries.service', [])
    .service('countriesService', ['jsendService', 'config', function (jsendService, config) {

        return {
            getAll: function (callback) {
                return jsendService.http({
                    method: 'GET',
                    url: config.apiUrl + "/countries"
                }, callback);
            },
            get: function (id, callback) {
                return jsendService.http({
                    method: 'GET',
                    url: config.apiUrl + "/countries/" + id
                }, callback);
            }
        }

    }]);
