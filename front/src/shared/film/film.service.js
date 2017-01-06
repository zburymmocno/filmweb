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
                return $http.get('/api/nerds', id);
            },

            add: function (id) {
                return $http.delete('/api/nerds/' + id);
            },

            delete: function (id) {
                return $http.delete('/api/nerds/' + id);
            }
        }

    }]);
