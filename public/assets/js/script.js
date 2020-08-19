// $(document).ready(function() {
//   const listEl = $("#depts");
//   console.log(listEl.text());

//   listEl.on("click", function() {
//     event.preventDefault();
// category = event.target.text


//   });
// });

// var shoppingCartEl = document.querySelector("#shopping-cart");
// var groceries = ["Bananas", "Apples", "Oranges", "Grapes", "Blueberries"];

// listEl.addEventListener("click", function(event) {
//   event.preventDefault();
//   if(event.target.matches("button")) {
//     var item = document.createElement("div");
//     item.textContent = groceries[event.target.parentElement.id];
//     shoppingCartEl.append(item);
//   }
// });

// $(() => {
//   $(".devour").on("click", function(event) {
//     event.preventDefault();
//     const id = $(this).data("id");
//     const addBurger = $(this).data("addBurger");
//     const burgerStatus = {
//       devoured: addBurger
//     };
//     // Send the PUT request.
//     $.ajax("/api/burgers/" + id, {
//       type: "PUT",
//       data: burgerStatus
//     }).then(() => {
//       location.reload();
//     });
//   });

//   $(".input-form").on("submit", event => {
//     event.preventDefault();
//     const addBurger = {
//       burger_name: $("#burgerName").val()
//     };


//   });
// });
