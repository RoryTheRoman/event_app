



$(document).ready(function () {

  //CREATE EVENT
    $("#create-event-form").on("submit", function (event) {
      event.preventDefault();
  
      var event_name = $("#event_name").val().trim();
      var event_date = $("#date").val().trim();
      var location = $("#location").val().trim();
      var start_time = $("#start-time").val().trim();
      var end_time = $("#end-time").val().trim();
      var user_id = $("#user_id").text();
  
      var newEvent = {
        event_name: event_name,
        event_date: event_date,
        location: location,
        start_time: start_time,
        end_time: end_time,
        userId: user_id
      };
  
      console.log(newEvent);
  
      $.ajax("/api/events", {
        type: "POST",
        data: newEvent
      }).then(
        function () {
          window.location.href = "/home";
        }
      );
    });
  
  //CREATE GUEST
  $("#create-guest-form").on("submit", function (event) {
    event.preventDefault();
  
    var eventId = $(this).data("id");
    var guest_name = $("#guest_name").val().trim();
    var contact = $("#contact").val().trim();
  
    var newGuest = {
      guest_name: guest_name,
      contact: contact,
      eventId: eventId
    };
  
    $.ajax("/api/guests", {
      type: "POST",
      data: newGuest
    }).then(
      function () {
        window.location.href = "/events/" + id;
      }
    );
  });
  
  //DELETE EVENT
    $("#delEntry").on("click", function(event) {
      event.preventDefault();
      
      var id = $(this).data("id");
      console.log("id", id);
  
      var deleteEvent = {
        id: id}
  
      if (confirm ("Are you sure you want to delete?")){
      $.ajax("/events/api/delete", {
        type: "DELETE",
        data: deleteEvent
      }).then(
        function() {
          window.location.href = "/home";
        }
      );
    } 
  });
  
  //   //GETTING UPDATE_EVENT PAGE
  //   $("#updEntry").on("click", function (event) {
  //     event.preventDefault();
  
  //     var info= {
  //       id: $(this).data("id")
  //     }
  
  //     $.ajax("/events/api/update_event", {
  //       type: "GET",
  //       data: info
  //     }).then(
  //       function () {
  //         console.log("updated event");
  //         window.location.href = "/update_event";
  //       })
  //     });
  //   });
  
  // //UPDATING EVENT
  //     $("#update-event-form").on("submit", function (event) {
  //       var eventId = $(this).data("id");
  //       event.preventDefault();
    
  //       var event_name = $("#event_name").val().trim();
  //       var event_date = $("#date").val().trim();
  //       var location = $("#location").val().trim();
  //       var start_time = $("#start-time").val().trim();
  //       var end_time = $("#end-time").val().trim();
  //       var user_id = $("#user_id").text();
    
  //       var updatedEvent = {
  //         eventId: eventId,
  //         event_name: event_name,
  //         event_date: event_date,
  //         location: location,
  //         start_time: start_time,
  //         end_time: end_time,
  //         userId: user_id
  //       };
    
  //       console.log(updatedEvent);
    
  //       $.ajax("/update_event/api/update", {
  //         type: "PUT",
  //         data: updatedEvent
  //       }).then(
  //         function () {
  //           console.log("updated event");
  //           window.location.href = "/events/" + id;
  //         }
  //       );
  //     });


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