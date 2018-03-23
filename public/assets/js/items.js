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


  $(".upItemStatus").on("click", function(event) {
    var id = $("#updEntry").data("id");
    var itemId = $(this).data("id");
    var status;
    var itemStatus = $(this).data("status");

    if (itemStatus === false) {
        status = true;
    } 
    else {
        status = false;
    }
 
    var updatedItem = {
        itemId: itemId,
        status: status
    }

    $.ajax("/api/updateItem/" + id, {
      type: "PUT",
      data: updatedItem
    }).then(
      function() {
        // window.location.href = "/events/" + id;
      }
    );
  });

});


$('.addGuest').on('click', function () {
    if ($('#inputDIV').hasClass('none')) {
        $('.closeGuest').html("<i class='fas fa-times'></i>");
        $(".showGuest").html("");
        $('#inputDIV').css('display', 'block');
        $('#inputDIV').removeClass('none');
        $('#inputDIV').addClass('block');
    } else {
        $('.showGuest').html("<i class='fas fa-plus smallIcon'></i> GUEST");
        $(".closeGuest").html("");
        $('#inputDIV').css('display', 'none');
        $('#inputDIV').removeClass('block');
        $('#inputDIV').addClass('none');
    }
});