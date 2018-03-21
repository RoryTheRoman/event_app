$(document).ready(function () {

  //on click function for creating an event
  $("#create-event-form").on("submit", function (event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    // Getting jQuery references of new event
    var event_name = $("#event_name").val().trim();
    var event_date = $("#date").val().trim();
    var location = $("#location").val().trim();
    var start_time = $("#start-time").val().trim();
    var end_time = $("#end-time").val().trim();
    var user_id = $("#user_id").text();

    // Constructing a event object to hand to the database
    var newEvent = {
      event_name: event_name,
      event_date: event_date,
      location: location,
      start_time: start_time,
      end_time: end_time,
      userId: user_id
    };

    console.log(newEvent);

    // Send the POST request.
    $.ajax("/api/events", {
      type: "POST",
      data: newEvent
    }).then(
      function () {
        // Reload the page to get the updated list
        window.location.href = "/home";
      }
    );
  });

  //on click function for deleting an event
  $("#delEntry").on("click", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();
    
    var id = $(this).data("id");

    // Send the DELETE request.
    $.ajax("/events/" + id, {
      type: "DELETE",
      data: id
    }).then(
      function() {
        // Reload the page to get the updated list
        window.location.href = "/home";
      }
    );
  });

  // on click function for updating an event
  $("#update-event-form").on("submit", function (event) {

    var id = $(this).data("id");


    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    // Getting jQuery references of updated event
    var event_name = $("#event_name").val().trim();
    var event_date = $("#date").val().trim();
    var location = $("#location").val().trim();
    var start_time = $("#start-time").val().trim();
    var end_time = $("#end-time").val().trim();
    var user_id = $("#user_id").text();

    // Constructing a event object to hand to the database
    var updatedEvent = {
      id: id,
      event_name: event_name,
      event_date: event_date,
      location: location,
      start_time: start_time,
      end_time: end_time,
      userId: user_id
    };

    console.log(updatedEvent);

    // Send the PUT request.
    $.ajax("/api/events", {
      type: "PUT",
      data: updatedEvent
    }).then(
      function () {
        console.log("updated event");
        // Reload the page to get the updated list
        window.location.href = "/events/" + id;
      }
    );
  });

  // // on click function for updating an event
  // $("#update_event").on("click", function (event) {
  //   var id = $(".event-name").text();

  //   event.preventDefault();

  //   // Send the PUT request.
  //   $.ajax("/update_event/" + id, {
  //     type: "GET",
  //     data: updatedEvent
  //   }).then(
  //     function () {
  //       console.log("updated event");
  //       // Reload the page to get the updated list
  //     })
  //   });

    // on click function for updating an event
  $("#update_event").on("click", function (event) {
    var id = $(this).data("id");

    event.preventDefault();

    // Send the PUT request.
    $.ajax("/update_event/" + id, {
      type: "GET",
      data: id
    }).then(
      function () {
        console.log("updated event");
        // Reload the page to get the updated list
      })
    });



  });