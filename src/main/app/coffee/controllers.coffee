
myControllers = angular.module 'myControllers',[]

myControllers.controller 'GreetingController', ['$scope','$http',
  ($scope, $http) ->
    $http.get('assets/app/data/greetings/greetings.json').
      success(data) ->
        $scope.greetings = data

    $scope.greetingSort = 'text'
]

myControllers.controller 'HeaderController', ['$scope',
  ($scope)->
    $scope.pageHeading = 'Angular js Starter Project from Controller'
]
myControllers.controller 'FooterController', ['$scope',
  ($scope)->
    $scope.currentDateTime = new Date()
]

###
($scope)->
    $scope.greetings = [ss
        id: 1
        text: 'Hello World!'
        lang: 'en'
      ,
        id: 2
        text: 'Holla Mundo!'
        lang: 'es'
      ,
        id: 3
        text: 'Bonjur La Monde!!'
        lang: 'fr'
    ]###
