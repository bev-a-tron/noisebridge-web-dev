var myFavoriteNumbers = [1, 2, 3, 4];

console.log(myFavoriteNumbers[1]);

var i = 0;
for (i; i < myFavoriteNumbers.length; i++) {
    console.log("test " + i);
}

console.log('i is: ', i);

var j = 0;
while(j < myFavoriteNumbers.length) {
    console.log("The value of j is " + j);
    j += 1;
}

for (var k = 0; k < myFavoriteNumbers.length; k++) {
    console.log(myFavoriteNumbers[k]);
}

var me = {
    name: "Jeffrey",
    age: 29,
    location: "Berkeley",
    favoriteFoods: [
        "sushi",
        "pizza",
        "eggplant"
    ],
    goToSleep: function() {
        console.log("Jeffrey is sleeping")
    },
    siblings: [
        {
            name: "Lily",
            age: 25,
            location: "Brooklyn"
        }
    ]
};

console.log(me['name']);
console.log(me['location']);
console.log(me['favoriteFoods'][0]);

var loc = 'location';
console.log(me[loc]);

me['goToSleep']();
me.goToSleep();

// you can't iterate through an object using a normal for loop
// look up: for in, but it's not used very much


var addend1 = "hooray";
var addend2 = [1,2,3,4,5];

var temp = 'this is a thing!';
var add = function (addend1, addend2) {
    temp = 'hello';
    console.log('addend1 living in the global scope is ' + window.addend1);
    var something = me.favoriteFoods[0];
    alert("Jeffrey's favorite food is " + something);
    return addend1 + addend2;
};

console.log(temp);

var sum = add(1, 2);
console.log(sum);

var sum3 = add(add("hello", " "), "world");
console.log(sum3);

var yay = function() {
    console.log("hooray!");
};

var resultOfYay = yay();

var helloWorld = function(hello, world) {
    return hello + world;
};

console.log(helloWorld("hello"));
// gives "helloundefined"

var doSomething = function (obj) {
    return obj.something;
};

var something = doSomething({name: 'me'});

var changeMyFavoriteNumbers = function() {
    myFavoriteNumbers[0] = 1234567890;
};

changeMyFavoriteNumbers();
console.log(myFavoriteNumbers);
