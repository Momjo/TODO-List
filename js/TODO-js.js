/**
 * @param {Event} event 
 * @param {object} element 
 */
function newTodo(event, element) {

  // Prevent page refresh
  event.preventDefault();

  // Get input
  var input = $(element).find('#input');

  var input_datePicker = $(element).find('#dateInput');
  var description_input = $(element).find('#description');

  // Validate
  if (!input.val()) {
    return alert("You must enter a to do!");
  }

  // Create a new to do element
  var clone = $("#todo").prepend($("#clone .todo").clone()).children()[0];

  // Set todo text
  $(clone).children("span").text(input.val());


  // Slide down todo
  $(clone).hide().slideDown();

  // Reset input
  input.val("");
  
  // Hide the options Menu
  $('#moreOptions').hide();
  
  // Rotate the Option Icon
  $('.more-Option-Icon').removeClass("down");
}

/**
 * @param {object} element 
 */
function moveTodo(element) {

  // Don't move if removing
  if ($(element).hasClass("removing")) {
    return;
  }

  // Move to #todo or #done?
  var moveTo = $(element).parent("#done").length ? "#todo" : "#done";

  // Move todo to the list (with slide animation)
  $(element).slideUp(function() {
    $(this).slideDown().detach().prependTo(moveTo);
  });
}

/**
 * @param {object} element 
 */
function removeTodo(element) {

  // Get todo element
  var todo = $(element).parent();

  // Add removing class
  todo.addClass("removing");

  // Fade out and remove todo
  todo.slideUp(function() {
    $(this).remove();
  });

  // Remove the button
  $(element).remove();
}

function newTodoOptions(){

  //add shadow class to div
  $('#moreOptions').addClass('shadow');
  
  //todo option toggle slide
  $('#moreOptions').slideToggle();
  $('.more-Option-Icon').toggleClass("down");
  
  // Added Date to TODO
  $('#datePicker').calendar({
    type: 'date'    
  });
}
