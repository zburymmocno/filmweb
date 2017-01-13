angular
    .module('film.service', [])
    .service('filmService', ['jsendService', 'config', function (jsendService, config) {
        return {
            getAll: function (callback) {
                return jsendService.http({
                    method: 'GET',
                    url: config.apiUrl + "/films"
                }, callback);
            },

            get: function (id, callback) {
                return jsendService.http({
                    method: 'GET',
                    url: config.apiUrl + "/films/" + id
                }, callback);
            },

            add: function (data, callback) {
                return jsendService.http({
                    method: 'POST',
                    data: JSON.stringify(data),
                    url: config.apiUrl + "/films/add",
                    headers: {'Content-Type': 'application/json'}
                }, callback);
            },
            edit: function (id, data, callback) {
                return jsendService.http({
                    method: 'POST',
                    data: JSON.stringify(data),
                    url: config.apiUrl + "/films/edit/" + id,
                    headers: {'Content-Type': 'application/json'}
                }, callback);
            },
            filters: function (data, callback) {
                return jsendService.http({
                    method: 'POST',
                    data: JSON.stringify(data),
                    url: config.apiUrl + "/filteredfilms",
                    headers: {'Content-Type': 'application/json'}
                }, callback);
            }
        }

    }]);