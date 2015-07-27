var app = angular.module("checklistApp", ['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider
        .when('/', {
            controller: 'MainController',
            templateUrl: 'views/list.html'
        })
        .when('/itemSettings/:id', {
            controller: 'MainController',
            templateUrl: 'views/itemSettings.html'
        })
        .when('/newItem', {
            controller: 'MainController',
            templateUrl: 'views/newItem.html'
        })
        .when('/:id', {
            controller: 'MainController',
            templateUrl: 'views/list.html'
        })
        .otherwise({
            redirectTo: '/'
        });
});

app.factory('taskFactory', function() {
    var listItems = [{
        title: "Take a shower",
        status: "complete",
        fibNum: 2,
        description: "It's always a good idea to take a shower",
        due: "7:00"

    }, {
        title: "Review programing concepts",
        status: "complete",
        fibNum: 3,
        description: "Including Javascript and Angular",
        due: "10:00"

    },{
        title: "Eat a healthy lunch",
        status: "incomplete",
        fibNum: 2,
        description: "Healthy food to get my mind ready!",
        due: "11:00"

    },{
        title: "Charge my phone",
        status: "incomplete",
        fibNum: 1,
        description: "I should charge my phone, so that it does not die.",
        due: "12:00"
    }
    ];

    var factory = {};
    factory.getListItems = function() {
        return listItems;
    };

    return factory;
});