angular
    .module('genres.service', [])
    .service('genresService', ['jsendService', 'config', function (jsendService, config) {
        return {

            getAll: function (callback) {
                return jsendService.http({
                    method: 'GET',
                    url: config.apiUrl + "/genres"
                }, callback);
            },
            get: function (id, callback) {
                return jsendService.http({
                    method: 'GET',
                    url: config.apiUrl + "/films/" + id
                }, callback);
            }
        }
    }]);
