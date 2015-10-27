var tweets = $('.tweets');


angular.module('NoiseTwitter', ['ngRoute']);

angular.module('NoiseTwitter').config(['$routeProvider', function ($routeProvider) {
  $routeProvider.when('/', {
    controller: 'MainController',
    templateUrl: 'main.html'  // ng-view says to replace its element with the template that has id='main.html'
  }).when('/tweets/:id', {
    controller: 'ShowController',
    templateUrl: 'show.html',
    /* resolve: {
      tweets:
        $.ajax('data/tweets.json')
      } */
  });
}]);



angular.module('NoiseTwitter').run(['$rootScope', function ($rootScope) {
  //$.ajax('data/tweets.json').done(function (response) {
  //  $rootScope.$apply(function () {
  //    $rootScope.tweets = response;
  //  })
  //})

  $rootScope.tweets = [
    {
      "id": 2,
      "author": "JeffreyATW",
      "time": "1h",
      "content": "You give love a bad name."
    },
    {
      "id": 1,
      "author": "JeffreyATW",
      "time": "2h",
      "content": "Old McDonald had a farm"
    },
    {
      "id": 0,
      "author": "JeffreyATW",
      "time": "3h",
      "content": "I'm a little teapot, short and stout."
    }
  ]

}]);

angular.module('NoiseTwitter').controller('MainController', ['$scope', function($scope) {

  $scope.addNewTweet = function () {
    var newTweetObj = {
      author: 'JeffreyATW',
      time: 'now',
      content: $scope.newTweet
    };
    $scope.tweets.unshift(newTweetObj);
    $scope.newTweet = '';
  };


}]);

// each controller has its own scope
// scopes cascade, overwriting higher nested scopes

angular.module('NoiseTwitter').controller('ShowController', ['$routeParams', '$scope', function ($routeParams, $scope) {
  for (var i = 0; i < $scope.tweets.length; i += 1) {
    if ($routeParams.id == $scope.tweets[i].id) {
      $scope.tweet = $scope.tweets[i]
    }
  }
}]);

angular.module('NoiseTwitter').directive('tweet', [function () {
  return {
    replace: true,  // replace the element it's in
    restrict: 'EA', // E stands for element, A stands for attribute, C for class
    scope: {
      data: '=',  // two way binding
      /* hello: '@',  // for strings
      func: '&' */
    },  // only can affect stuff specified inside here
    link: function ($scope, $element, $attrs) {  // element is the view, attrs are the attributes added to the elt
      $scope.toggleRetweet = function () {
        $scope.data.retweeted = !$scope.data.retweeted;
      };
      $scope.toggleFavorite = function () {
        $scope.data.favorited = !$scope.data.favorited;
      };
    },
    templateUrl: 'tweet.html'  // looks for this in the cache, which comes from text/ng-template
  }

}]);
