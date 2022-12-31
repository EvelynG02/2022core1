var cube = document.querySelector('.cube');
var radioGroup = document.querySelector('.radio-group');
var currentClass = '';

function changeSide() {
  var checkedRadio = radioGroup.querySelector(':checked');
  var showClass = 'show-' + checkedRadio.value;
  if ( currentClass ) {
    cube.classList.remove( currentClass );
  }
  cube.classList.add( showClass );
  currentClass = showClass;
}
// set initial side
changeSide();

radioGroup.addEventListener( 'change', changeSide );

var addinghello = setInterval(function(){$("body").prepend('<div class="box1"><div>' ); }, 500)
$("#prepend-btn").click(function(){
    $("body").prepend('<div class="newbox"><div>' )
    });

$("#append-btn").click(function(){
    $("body").append('<div class="newbox"><div>' )
    });


   

var addinghello = setInterval(function(){$("body").append('<div class="newbox"><div>' )}, 1000);



$("stop").click(function(){
clearInterval(addinghello);
});

$("colorchange").click(function(){
    setTimeout(function()
    {$("body").css({"background-color":"red"})}, 5000);
    });


console.log($("#div1").width());/*60*/
console.log($("#div2").width());/*100*/
console.log($("#div1").outerWidth());/*100*/
console.log($("#div2").outerWidth());/*140*/


$("#div1").width(500);/*set the width of #div1 to 540px, so the width without border and padding is 500px*/
$("#div2").width(500);/*set the width of #div1 to 500px, so the width without border and padding is 500px*/


$("#div1").outerWidth(100);/*set the width of #div1 to 500px, so the width with border and padding is 500px*/
$("#div2").outerWidth(500);/*set the width of #div1 to 460px, so the width with border and padding is 500px*/

var div2width = $("#div2").css("width");/*get the width of #div2, and store the value in the variable div2width*/
var div2BackgroundColor = $("#div2").css("background-color");/*get the background-color of #div2, and store the value in the variable div2BackgroundColor*/

console.log("width of div2: " + div2width);
console.log("background-color of div2: " + div2BackgroundColor);


$("#div2").css({"background-color": "purple", "width": "20%", "height": "20%"});
