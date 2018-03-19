$(document).ready(function() {

    // Getting jQuery references of new event
    var event_name = $("#event-name");
    var event_date = $("#date");
    var location = $("#location");
    var start_time = $("#start-time");
    var end_time = $("#end-time");
    var create_event_form = $("#create-event-form");

    // Adding an event listener for when the form is submitted
    $(create_event_form).on("submit", handleFormSubmit);
    // Gets the part of the url that comes after the "?" (which we have if we're updating a post)
    var url = window.location.search;

    var eventId;
    var guestId;
    var userId;

    // Sets a flag for whether or not we're updating a post to be false initially
    var updating = false;
  
    // Getting the users and their events
    getUsers();
  
    // A function for handling what happens when the form to create a new event
    function handleFormSubmit(event) {

      event.preventDefault();

      // Wont submit the post if we are missing fields
      if (!titleInput.val().trim() || !bodyInput.val().trim() || !authorSelect.val()) {
        return;
      }

      // Constructing a event object to hand to the database
      var newEvent = {
        event_name: event_name
          .val()
          .trim(),
        event_date: event_date
          .val()
          .trim(),
        location: location
          .val()
          .trim(),
        start_time: start_time
          .val()
          .trim(),
        end_time: end_time
          .val()
          .trim()
      };
  
      // If we're updating an event run updateEvent
      // Otherwise run submitEvent to create a whole new event
      if (updating) {
        newEvent.id = eventId;
        updateEvent(newEvent);
      }
      else {
        submitEvent(newEvent);
      }
    }
  
    // Submits a new post and brings user to blog page upon completion
    function submitEvent(post) {
      $.post("/api/events", post, function() {
        window.location.href = "/event";
      });
    }
  
    // Update a given post, bring user to the blog page when done
    function updateEvent(post) {
      $.ajax({
        method: "PUT",
        url: "/api/events",
        data: post
      })
      .then(function() {
        window.location.href = "/event";
      });
    }
  });
// $("#create-event-form").on("submit", function (event) {
//   // Make sure to preventDefault on a submit event.
//   event.preventDefault();

//   var newEvent = {
//     event_name: $("#event_name").val().trim(),
//     event_date: $("#date").val().trim(),
//     location: $("#location").val().trim(),
//     start_time: $("#start-time").val().trim(),
//     end_time: $("#end-time").val().trim()
//   };

//   // Send the POST request.
//   $.ajax("/api/events", {
//     type: "POST",
//     data: newEvent
//   }).then(
//     function () {
//       console.log("created a new event!");
//       // Reload the page to get the updated list
//       location.reload();
//     }
//   );
// });