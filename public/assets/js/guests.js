$(document).ready(function () {


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
                window.location.href = "/events/" + eventId;
            }
        );
    });

    //on click function for updating an event
    $("#update-guest").on("click", function (event) {
        var id = $(this).data("id");

        event.preventDefault();

        // Getting jQuery references of new event
        var guest_name = $("#guest-name");
        var contact = $("#contact");

        // Constructing a event object to hand to the database
        var updatedGuest = {
            guest_name: guest_name
                .val()
                .trim(),
            contact: contact
                .val()
                .trim()
        };

        // Send the PUT request.
        $.ajax("/api/guests/" + id, {
            type: "PUT",
            data: updatedGuest
        }).then(
            function () {
                console.log("updated guest");
                // Reload the page to get the updated list
                window.location.reload();

            })
    });

});