var myControllers;

myControllers = angular.module('myControllers', []);

myControllers.controller('GreetingController', [
  '$scope', '$http', function($scope, $http) {
    $http.get('assets/app/data/greetings/greetings.json').success(data)(function() {
      return $scope.greetings = data;
    });
    return $scope.greetingSort = 'text';
  }
]);

myControllers.controller('HeaderController', [
  '$scope', function($scope) {
    return $scope.pageHeading = 'Angular js Starter Project from Controller';
  }
]);

myControllers.controller('FooterController', [
  '$scope', function($scope) {
    return $scope.currentDateTime = new Date();
  }
]);


/*
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
    ]
 */

var myApp;

myApp = angular.module('myApp', ['myControllers']);
