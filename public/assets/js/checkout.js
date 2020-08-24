$(document).ready(() => {
  // This file just does a GET request to figure out which user is logged in
  // and updates the HTML on the page

  const totalObj = $("#total");
  const subTotalObj = $("#subTotal");
  const greensObj = $("#greens-total");
  const meatObj = $("#meat-total");
  const dairyObj = $("#dairy-total");
  let currentCredit = {};
  cartTotals = calculateTotals();

  updateTotals = () => {
    greensObj.text("$ " + cartTotals.greensTotal);
    meatObj.text("$ " + cartTotals.meatTotal);
    dairyObj.text("$ " + cartTotals.dairyTotal);
    totalObj.text("$ " + cartTotals.cartTotal);
    subTotalObj.text("$ " + cartTotals.cartTotal);
  };

  updateTotals();

  $("#checkout-form").submit(event => {
    event.preventDefault();
    const address1 = $("#address1").val();
    const address2 = $("#address2").val();
    const townCity = $("#town-city").val();
    const state = $("#state").val();
    const postcode = $("#postcode").val();
    const country = $("#country").val();
    const creditWarning = $(".insufficient");
    const amount = parseInt(
      $("#total")
        .html()
        .replace("$ ", "")
    );
    const userId = $("#place-order").attr("data-userId");
    currentCredit = parseInt(
      $("#current-credits")
        .text()
        .replace("$ ", "")
    );

    if (amount > currentCredit) {
      creditWarning.css("display", "block");
      return;
    }

    const balanceCredit = currentCredit - amount;

    // const phone = $("#phone").val();
    // const email = $("#email").val();

    const address =
      address2 +
      " " +
      address1 +
      ", " +
      townCity +
      ", " +
      state +
      " " +
      postcode +
      ", " +
      country;

    $.post("/api/placeOrder", {
      total: amount,
      addressId: address,
      userId: userId,
      paid: 1
    })
      .then(() => {
        $.post("/api/updateCredit", {
          userId: userId,
          credit: balanceCredit
        })
          .then(() => {
            window.location.replace("/complete");
          })
          .catch(err => console.log(err));

        localStorage.clear();
      })
      .catch(err => console.log(err));
  });
  $("#addCredit").on("click", event => {
    event.preventDefault();

    const creditAmount = parseInt($("#creditAmount").val());
    currentCredit = parseInt(
      $("#current-credits")
        .text()
        .replace("$ ", "")
    );
    const newCredit = currentCredit + creditAmount;
    const userId = $("#place-order").attr("data-userId");

    $.post("/api/updateCredit", {
      userId: userId,
      credit: newCredit
    })
      .then(() => {
        location.reload();
      })
      .catch(err => console.log(err));
  });
});
