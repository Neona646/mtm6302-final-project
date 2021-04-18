
const $customize = document.getElementById('customize');
const $timer = document.getElementById('timer');
const $date = document.getElementById('date');
// Selecting with Jquery $(selector).action()

let is24Hours = false

const $twenty = document.getElementById('twenty');
const $twelve = document.getElementById('twelve');

$twenty.addEventListener('click', function(){
    is24Hours = true;
});

$twelve.addEventListener('click' , function() {
    is24Hours = false;
});


setInterval(function () {
    const $blockA = new Date()
const $clock = document.getElementById('clock')
$clock.textContent = $blockA.toLocaleTimeString();
$("#clock").css({
    "font-size" : "8rem",
    "color" : "white",
    "position" : "absolute",
    "left"  : "27%",
    "top" : "30%"
})

    if (is24Hours === true) {
     $clock.textContent = $blockA.toLocaleTimeString('it-IT')
    } else if( is24Hours === false) {
    $clock.textContent = $blockA.toLocaleTimeString('en-US')
    }


    const $month = document.getElementById('month')
    $('.months').click(function(){
        $month.textContent = $blockA.toDateString()
    $("#month").css({
        "color" : "white",
        "position" : "absolute",
        "left"  : "35%",
        "top" : "70%",
        "font-size" : "4rem", 
    })
    })
    
 
}, 1000)












/// Background
fetch('https://api.nasa.gov/planetary/apod?api_key=OnKN6Z9rYZXr6JwsAW2jGaxyXMG5VZRKVBQOMuYa')
.then(function(response) {
    return response.json()
}) .then(function(json) {
    console.log(json.url)
})



// Get Dates 

/*const time = setInterval(myTimer, 1000)
function myTimer() {
}
*/



// Weeks and month 


/*$month.textContent = $blockA.toDateString()
$("#month").css({
    "color" : "white",
    "position" : "absolute",
    "left"  : "35%",
    "top" : "70%",
    "font-size" : "4rem", 
}) */


//Set Interval 

