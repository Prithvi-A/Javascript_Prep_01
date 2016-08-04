


// Exercise 1:

// Make the above code work inside a script tag in an HTML document
// Create a div with the text "show me the money". If the user clicks on it, show them the money!
// Create a div with the text "show me the Oprah". If the user clicks on it, show them the Oprah!
// Create a div with the text "show me the Opera". If the user clicks on it, show them the Opera!
// Make it so that when a user clicks on one item to show it, all the others hide first if they are already shown.
// When a user clicks on an item that is already shown, hide it instead.



$('div.push_button').each(function() {
    var $push_button = $(this);

    $('button', $push_button).click(function(e) {
        e.preventDefault();
        
        $div = $('div.content', $push_button);
        
        $div.toggle();
        $('div.content').not($div).hide();
        return false;
    });
});


//Sample code
$('#target').on('mouseover', function() {
  $('#target').addClass('highlighted');
});
$('#target').on('mouseleave', function() {
  $('#target').removeClass('highlighted');
});

// Exercise 2:

// Place the above code into a script tag in an HTML document
// Make sure there is a #target element on the page and that it has a non-zero height and width
// Define CSS rules for the 'highlighted' class
// Make sure everything is wired up correctly and works as you would expect
// Place an image on the page that disappears when you place your mouse over a particular div#magic. Maybe this one of Margaret Hamilton.
// How many different ways can you think of to accomplish that task?

$('.outer').mouseover( function() {
    $('#magic').css('visibility','hidden');
}).mouseout( function() {
        $('#magic').css('visibility','visible');
});

// Sample code
var mouse_tracker = function(event){
  console.log(event.pageX, event.pageY, event.which);
};

$('body').on('mousemove', mouse_tracker);

// Exercise:

// How can we inspect the event object in the console? What properties and methods does it have?
// Do click events and mouseover events get arguments passed into each invocation of their event handler functions as well? Do they have the same properties?
// Create a small position: fixed <img> that follows the cursor around the screen. Maybe a gif of a puppy walking.
// Figure out how to hide the cursor with CSS
// Make the image follow the mouse only if the mouse button is pressed

/* Properties are position of the mouse on the 
    X axis(event.pageX)
    Y axis(event.pageY)
*/

    $('#whichkey').on('keydown',function(e) {
        $('#log').html(e.type + ":" + !!e.which);
    });
