app.controller('MainController', ['$scope', '$routeParams', 'taskFactory', function($scope, $routeParams, taskFactory) {

    $scope.id = $routeParams.id;

    $scope.listItems = taskFactory.getListItems();

    $scope.addTask = function() {
        $scope.listItems.push({
            title: $scope.newTask.title,
            fibNum: $scope.newTask.fibNum,
            description: $scope.newTask.description,
            status: "Incomplete",
            due: $scope.newTask.due
        });
    };

    $scope.remove = function(item) {
        var index = $scope.listItems.indexOf(item);
        $scope.listItems.splice(index, 1);
    };


}]);