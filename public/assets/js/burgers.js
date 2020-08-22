$(() => {
  $(".devour").on("click", function(event) {
    event.preventDefault();
    const id = $(this).data("id");
    const addBurger = $(this).data("addBurger");
    const burgerStatus = {
      devoured: addBurger
    };
    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: burgerStatus
    }).then(() => {
      location.reload();
    });
  });

  $(".input-form").on("submit", event => {
    event.preventDefault();
    const addBurger = {
      burgerName: $("#burgerName").val()
    };

    $.ajax("/api/burgers", {
      type: "POST",
      data: addBurger
    }).then(() => {
      location.reload();
    });
  });
});
