var tweets = $('.tweets');


angular.module('NoiseTwitter', []);

angular.module('NoiseTwitter').controller('MainController', ['$scope', function($scope) {
  $scope.hello = "Hi, there!";

  $scope.tweets = [
    {
      author: 'JeffreyATW',
      time: '1h',
      content: 'You give love a bad name.',
    },
    {
      author: 'JeffreyATW',
      time: '2h',
      content: 'Old McDonald had a farm',
    },
    {
      author: 'JeffreyATW',
      time: '3h',
      content: 'I\'m a little teapot, short and stout.',
    }
  ];

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
