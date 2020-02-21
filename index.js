// var today = new Date();
// var hourNow = today.getHours();
// var greeting;
// hourNow = 5

function greeting (){

var person = prompt("Have you been to Guam");

var response;

    if (person === 'yes') {
        response = 'So that means you love Guam right?';
    } else if (person === 'no') {
        alert('Book a trip then!');
        response = 'Book a trip!';
    } else if (person === 'someday') {
        response = 'Great see you soon!';
    } else {
        response = 'Welcome to my page!';
    }

var responseForReal = '<h3>' + response + '</h3>';

return responseForReal;
}

function fish(){


var person = prompt("Do you like fishing?");

var response;

    if (person === 'yes') {
        response = 'You will enjoy the fishing life on Guam!';
    } else if (person === 'no') {
        alert('Your missing out!');
        response = 'Your missing out!';
    } else if (person === 'I do not know how to fish.') {
        response = 'No worries you can learn while your here!';
    } else {

var responseForReal = '<h3>' + response + '</h3>';

return responseForReal = 'Enjoy the beaches then!';
}   
}

function cultures(){

var person = prompt("Do you like learning other cultures?");

var response;

    if (person === 'yes') {
        response = 'Great I hope you enjoy learning about mine!';
    } else if (person === 'no') {
        alert('I hope you enjoy my page anyways!');
        response = 'I hope you enjoy my page anyways!';
    } else if (person === 'maybe') {
        response = 'Give my page a look you might enjoy it!';
    } else {
        response = 'Happy learning!';
}
    
var responseForReal = '<h3>' + response + '</h3>';

return responseForReal = 'Happy learning!';
}


function order (){
    var fishCount = prompt ("How many did you catch?");
    var totalFish = '';
    var imageShow = '<img src="/images/fish.jpg" width="50px" height="50px">';

    while( isNaN(fishCount) ){
        fishCount = prompt ('Please enter a number');
}

for (var i = 0; i < fishCount; i++) {
    totalFish = totalFish + imageShow;

}
return totalFish;
}