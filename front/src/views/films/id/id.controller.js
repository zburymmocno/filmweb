angular.module('app.filmsId', [
    'ui.router'
])
    .config([
        '$stateProvider', function ($stateProvider) {
            $stateProvider.state('films', {
                url: '/films/{id}',
                controller: 'filmsIdCtrl',
                template: require('./id.component.html')
            })
        }
    ])
    .controller('filmsIdCtrl',
        ['$scope', '$stateParams', 'filmService', 'user', 'toastService', '$state', '$mdDialog',
            function ($scope, $stateParams, filmService, user, toastService, $state, $mdDialog) {
                var id = $stateParams.id;

                $scope.user = user;

                filmService.get(id, {
                    success: function (data) {
                        $scope.film = data;
                        $scope.getScore();
                    }
                });

                $scope.$watch('rate', function (newValue, oldValue) {
                    $scope.sendScore($scope.rate);
                    $scope.getScore();
                }, true);

                $scope.removeFilm = function (ev) {
                    var confirm = $mdDialog.confirm()
                            .title("Czy na pewno chcesz usunąć film?")
                            .textContent("Jeśli to zrobisz, film przepadnie bezpowrotnie!")
                            .targetEvent(ev)
                            .ok('Tak, jestem tego pewnien!')
                            .cancel("Nie, jednak nie chcę tego robić")
                        ;
                    $mdDialog.show(confirm).then(function () {
                        filmService.remove($scope.film.film_id, {
                            success: function () {
                                toastService.success("Film został usunięty poprawnie");
                                $state.go('home');
                            }
                        })
                    }, function () {
                        toastService.success("Film nie został usunięty");
                    });
                };

                $scope.sendScore = function (score) {
                    filmService.rate($scope.film.film_id, score, {
                        success: function () {
                            toastService.success("Film został oceniony. Twoje ocena to " + score.ocena + "/5");
                        }
                    })
                };

                $scope.getScore = function () {
                    filmService.getRate($scope.film.film_id, {
                        success: function (data) {
                            $scope.rate = data;
                            $scope.getAverageScore();
                        },
                        error: function () {
                            $scope.getAverageScore();
                        }
                    });
                };
                $scope.getAverageScore = function () {
                    filmService.getAverageRate($scope.film.film_id, {
                        success: function (data) {
                            $scope.averageScore = data;
                        },
                        error: function (data) {
                        }
                    });
                };
            }])
;