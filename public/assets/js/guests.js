$(document).ready(function () {

//CREATE GUEST
  $("#create-guest-form").on("submit", function (event) {
    event.preventDefault();

    var id = $(this).data("id");
    var guest_name = $("#guest_name").val().trim();
    var contact = $("#contact").val().trim();

    var newGuest = {
      guest_name: guest_name,
      contact: contact,
      eventId: id
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

  //DELETE GUESTS
  $("#delGuest").on("click", function(event) {
    event.preventDefault();
    var guestId = $(this).data("id");
    var id = $("#updEntry").data("id");

    var deleteGuest = {id: guestId}

    if (confirm ("Are you sure you want to delete?")){
    $.ajax("/events/api/delete/guest", {
      type: "DELETE",
      data: deleteGuest
    }).then(
      function() {
        window.location.href = "/events/" + id;
      }
    );
  } 
  });

});
