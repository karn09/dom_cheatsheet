// Selectors
var ps = document.querySelectorAll("p"); // will select all p tags
var ps = $('p'); // will select all p tags

var p = document.querySelector("p"); // will select the first one only
p.innerHTML = "Just changed it!"; // => will change the innerHTML to "just changed it"

var p = $('p').first();
p.html("Just changed it!");


var choose = document.getElementById("choose");
var choose = $("#choose");

var buttons = document.getElementsByClassName("new-buttons");
var buttons = $('.new-buttons');

var list = document.getElementsByTagName("ul");
var list = $("ul");

var lists = list[0].getElementsByTagName("li");  // we want to mostly use getElementById
var lists = $("ul > li");


// DOM Manipulation
$("#choose").append("<p>more content</p>");
document.getElementById("choose").innerHTML += "<p>more content</p>";

// Remove all child nodes
$("#choose").empty();
document.getElementById("choose").innerHTML = null;

// Remove element from the DOM
$("#choose").remove();
$("#choose"); // => []

var c = document.getElementById("choose");
c.parentNode.removeChild(c);


// Selecting items by class or id
$('div.blue').eq(2); // provides jQuery wrapped Element
$('div.blue').get(2); // provides raw element
$('div.blue')[2]; // also provides raw element    

document.querySelectorAll("div.blue").item(2);
document.querySelectorAll("div.blue")[2];

// Get first and last items.
$("div.blue").first();
document.querySelector("div.blue");

$("div.blue").last();
var blue = document.querySelectorAll("div.blue")
blue[blue.length - 1];

// Find
$("div").find(".blue"); // finds all divs with class blue
document.getElementsByTagName("div")[0].getElementsByClassName("blue");

// Previous and next
var element = $('li').eq(1);
element.prev();
element.next();

var element = document.getElementById('two');
element.previousElementSibling;
element.nextElementSibling;

// Closest 
// $('#list').closest('div'); // no real JS equivalent


// DOM MANIPULATION
var button = $("div .buttons").children().eq(1);
button.addClass("btn btn-success");
button.removeClass("btn-success");

var buttons = $('.new-buttons').children();
buttons.addClass("btn btn-primary");

var buttonDiv = document.getElementsByClassName('new-buttons')[0];
buttonDiv.children[0].classList.add('btn');
buttonDiv.children[0].classList.add('btn', 'btn-primary'); // add two or more classes
buttonDiv.children.item(0).classList.remove("btn");

var buttons = buttonDiv.querySelectorAll("div");

for (var i = 0; i < 6; i++) {
  buttons[i].classList.add("btn", "btn-primary");
}


// HTML & Text
var h2 = $("h2");
h2.html("BUTTONS"); // adds buttons
h2.html(""); // erases content
h2.html("<strong>WE'RE BACK!</strong>");

var h2 = document.querySelectorAll("h2");

var length = h2.length;
for (var i = 0; i < length; i++) {
  h2.item(i).innerHTML = "BUTTONS";
}

/* REPLACE LOOP WITH THESE TO MIMIC JQUERY BEHAVIOR
  h2.innerHTML = "";
  h2.innerHTML = "<strong>I'M BACK!</strong>";
*/


// Append and Prepend
$("p").prepend("Hello");
$("p").append("Goodbye");

// Remove elements
$('p').empty(); // empties all the p elements
$('p').html("");
$('p').remove();


// Generically write to document
$(document.body).html("").append('hello');
document.write("hello");


// CSS  
var element = $('#list');
element.css("color", "red");
element.css({
  color: "red",
  backgroundColor: "blue",
  fontSize: "20px"
});

var element = document.getElementById("list");
element.style.color = "red";
element.style.backgroundColor = "blue";
element.style.fontSize = "20px";


// Form Values
var element = $("#select");
element.val("something"); // sets value
element.val(); // gets the value

var element = document.getElementById("select");
element.value = "POWDERED TOAST"; // sets value
element.value; // returns value


// Effects
// This is where jQuery comes in handy
$("p").hide();
$("p").show();


// Events
$("#hello").click(function() {
  alert("hey!");
});

document.getElementById('hello').addEventListener('click', function() { alert("hey!") }, false);


// More jQuery Selectors
$("div > p"); // select all p tags in all divs  
$("div > p:first-child"); // select first child of div element
$("div > p:last-child"); // selects last child of div element
$("div strong"); // select all strong elements in a div  
$("div:even").css("background-color", "red"); // select even element
$("div:odd").css("background-color", "red"); // selects odd


// Document.ready 
$(document).ready(function() {
  // code
});
