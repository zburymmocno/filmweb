angular
    .module('errorCallback.provider', [])
    .provider('errorCallbackProvider', function ErrorCallbackProvider() {
        this.$get = function () {
            return function (data) {
                return console.log("connection problem \\toDo");
            }
        }
    });
