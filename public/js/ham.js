// The code in add.js handles what happens when the user clicks the "Add a book" button.
$(document).ready(function () {
  console.log("ready!");
  $(document).on("click", ".add-burger", addBurger);
  $(document).on("submit", ".create-burger", createBurger);
  $(document).on("click", ".delete-burger", deleteBurger);
  $(document).on("click", ".change-devoured", editDevo);
 // $(document).on("click", "button.delete", deleteTodo);
  $(document).on("click", ".edit-burger", editBurger);

 // $(document).on("submit", "#todo-form", insertTodo);


function addBurger(){
  event.preventDefault();
  $("#results-modal").modal("toggle");
}


function createBurger(){
    // Make sure to preventDefault on a submit event.
    event.preventDefault();
    let bur = $("#bur").val().trim();
    let rad = $("input[name='devoured']:checked").val();

    function validateForm() {
      let isValid = false;
      if ((bur !== "") && (rad <= 1)) {
        isValid = true
      }
      return isValid;
    }

    if (validateForm()) {
      //  if ((bur !== null) && (rad !== null)) {
      let newBurger = {
        name: bur,
        devoured: rad
      };
      // Send the POST request.
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function () {
          $("#results-modal").modal("toggle");
          console.log("created new burger");
          $("#success").removeClass('hide d-none').addClass('show');
          // Reload the page to get the updated list
          setTimeout(() => {
            location.reload();
          }, 2000);
        }
      );
    } else {
      $("#problem").removeClass('hide d-none').addClass('show');
      setTimeout(() => {
        $("#problem").removeClass('show').addClass('hide d-none');
      }, 2000);
    }
  }

function deleteBurger(){
    var id = $(this).data("id");
    // Send the DELETE request.
    $.ajax("/api/burgers/" + id, {
      type: "DELETE"
    }).then(
      function() {
        console.log("deleted burger", id);
        // Reload the page to get the updated list
        $("#delete").removeClass('hide d-none').addClass('show');
        // Reload the page to get the updated list
        setTimeout(() => {
          location.reload();
        }, 1000);
      }
    );
  }

  function editDevo() {
    var id = $(this).data("id");
    var newDevoured = $(this).data("newdevoured");

    var newDevouredState = {
      devoured: newDevoured
    };

    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newDevouredState
    }).then(
      function() {
        console.log("changed devoured to", newDevoured);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  }

  function editName(name, id) {
    let newName = {
      name: name
    };
console.log(newName);
    // Send the PUT request.
    $.ajax("/api/burgers/nameChange/" + id, {
      type: "PUT",
      data: newName
    }).then(
      function() {
        console.log("changed devoured to", newName);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  }

    // This function handles showing the input box for a user to edit a todo
    function editBurger() {
      $(this).addClass('d-none');
      let id = $(this).data('id');
      $(this).siblings('.save-burger').removeClass('d-none'); 
      let editText = $(`.todo-item-${id}`);
      let content = editText.text();
       editText.html(`<input type="text" class="form-control burger-item-${id}" value="${content}" placeholder="${content}" required="">`)
        }
       $('.save-burger').click(function(){
        let id = $(this).data('id');
        let editText = $(`.burger-item-${id}`);
        let content = editText.val();
        $(this).addClass('d-none');
        $(this).siblings('.edit-burger').removeClass('d-none'); 
        editName(content, id);
       });
  
  });
  
