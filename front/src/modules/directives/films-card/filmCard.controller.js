angular
    .module('app.filmsCard', [])
    .directive('filmsCard', function () {
        return {
            controller: 'filmsCardCtrl',
            template: require('./filmsCard.component.html'),
            scope: {
                films: '='
            },
            link: function (scope, element, attrs) {

            }
        };
    }).controller('filmsCardCtrl', [
    '$scope', 'user', 'filmService', 'toastService', '$mdDialog',
    function ($scope, user, filmService, toastService, $mdDialog) {
        $scope.user = user;

        

        $scope.removeFilm = function (index, id, ev) {
            var confirm = $mdDialog.confirm()
                    .title("Czy na pewno chcesz usunąć film?")
                    .textContent("Jeśli to zrobisz, film przepadnie bezpowrotnie!")
                    .targetEvent(ev)
                    .ok('Tak, usuń!')
                    .cancel("Nie, jednak nie chcę tego robić.")
                ;
            $mdDialog.show(confirm).then(function () {
                filmService.remove(id, {
                    success: function () {
                        toastService.success("Film został usunięty poprawnie");
                        $scope.films.splice(index, 1);
                    }
                })
            }, function () {
                toastService.success("Film nie został usunięty");
            });
        }


    }
])
;