var tweetboxField = $('.tweetbox__field');
var tweets = $('.tweets');
var maxCharacters = 140;

$('.tweetbox').on('submit', function (event) {
    event.preventDefault();

    var newTweet = $('.tweet').first().clone();
    var textAreaValue = tweetboxField.val();

    newTweet.find('.tweet__time').text('now');
    newTweet.find('.tweet__content').text(textAreaValue);  // text accepts a string
    newTweet.removeClass('favorited retweeted');

    tweets.prepend(newTweet);  // prepend takes strings and jQuery objects

    tweetboxField.val('');

});

var calculateRemainingCharacters = function () {
    var textAreaValue = tweetboxField.val();
    var textAreaLength = textAreaValue.length;

    $('.tweetbox__button').prop('disabled', textAreaLength > maxCharacters);
    $('.tweetbox__counter').text(maxCharacters - textAreaLength);
};

calculateRemainingCharacters();

tweetboxField.on('keyup', calculateRemainingCharacters);

//$('.retweet').on('click', function () {
//   $(this).closest('.tweet').toggleClass('retweeted');
//
//});
//
//$('.favorite').on('click', function () {
//    $(this).closest('.tweet').toggleClass('favorited');
//});

tweets.on('click', '.retweet', function () {
    $(this).closest('.tweet').toggleClass('retweeted');

});

tweets.on('click', '.favorite', function () {
    $(this).closest('.tweet').toggleClass('favorited');

});