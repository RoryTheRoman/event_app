$(document).ready(function () {

    $("#create-item-form").on("submit", function (event) {
        event.preventDefault();

        var id = $(this).data("id");
        var item_name = $("#item_name").val().trim();
        var quantity = $("#quantity").val();
        
        var newItem = {
            item_name: item_name,
            quantity: quantity,
            eventId: id
        };

        $.ajax("/api/items", {
            type: "POST",
            data: newItem
        }).then(
            function () {
                window.location.href = "/events/" + id;
            });
    });

      //DELETE GUESTS
  $("#delItem").on("click", function(event) {
    event.preventDefault();
    var itemId = $(this).data("id");
    var id = $("#updEntry").data("id");

    var deleteItem = {
      id: itemId}

    if (confirm ("Are you sure you want to delete?")){
    $.ajax("/events/api/delete/item", {
      type: "DELETE",
      data: deleteItem
    }).then(
      function() {
        window.location.href = "/events/" + id;
      }
    );
  } 
  });


    //on click function for updating an event
    $("#update-item").on("click", function (event) {
        var id = $(this).data("id");

        event.preventDefault();

        // Getting jQuery references of new event
        var item_name = $("#item-name").val().trim();

        // Constructing a event object to hand to the database
        var updatedItem = {
            item_name: item_name,
            guestId: id
        };

        // Send the PUT request.
        $.ajax("/api/items/" + id, {
            type: "PUT",
            data: updatedItem
        }).then(
            function () {
                console.log("updated item");
                // Reload the page to get the updated list
                window.location.reload();

            })
    });

});