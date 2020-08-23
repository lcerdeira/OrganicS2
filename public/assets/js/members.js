$(document).ready(() => {
  // This file just does a GET request to figure out which user is logged in
  // and updates the HTML on the page

  $.get("/api/user_data").then(data => {
    window.location.replace("/checkout");

    $(".member-name").text(data.firstName);
  });
});
