todomvc.controller('MyController', ['$scope', function($scope) {
    $scope.date = new Date();
    $scope.open = {date: false};

    $scope.dateOptions = {
        showWeeks: false,
        startingDay: 1
    };

    $scope.timeOptions = {
        readonlyInput: true,
        showMeridian: false
    };

    $scope.openCalendar = function(e, date) {
        e.preventDefault();
        e.stopPropagation();
        $scope.open[date] = true;
    };
}]);

