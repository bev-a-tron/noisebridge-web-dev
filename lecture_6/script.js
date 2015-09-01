var tweetboxField = $('.tweetbox__field');
var tweets = $('.tweets');

$('.tweetbox').on('submit', function (event) {
    event.preventDefault();

    var newTweet = $('.tweet').first().clone();
    var textAreaValue = tweetboxField.val();

    newTweet.find('.tweet__time').text('now');

    newTweet.find('.tweet__content').text(textAreaValue);  // text accepts a string
    tweets.prepend(newTweet);  // prepend takes strings and jQuery objects

    tweetboxField.val('');

});
