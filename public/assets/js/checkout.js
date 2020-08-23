$(document).ready(() => {
  // This file just does a GET request to figure out which user is logged in
  // and updates the HTML on the page
  const arrSum = arr => arr.reduce((a, b) => a + b, 0);
  const totalObj = $("#total");
  const subTotalObj = $("#subTotal");
  const greensObj = $("#greens-total");
  const meatObj = $("#meat-total");
  const dairyObj = $("#dairy-total");

  calculateTotals = () => {
    const totalsArray = [];
    const meatArray = [];
    const greensArray = [];
    const dairyArray = [];
    let storageArray = [];

    if (localStorage.getItem("shoppingCart") !== null) {
      storageArray = JSON.parse(localStorage.getItem("shoppingCart"));
    }

    storageArray.forEach(element => {
      const elementTotal = element.itemPrice * element.itemQty;
      if (element.itemCategory === "meat") {
        meatArray.push(elementTotal);
      } else if (element.itemCategory === "greens") {
        greensArray.push(elementTotal);
      } else if (element.itemCategory === "dairy") {
        dairyArray.push(elementTotal);
      }

      totalsArray.push(elementTotal);
    });

    const totals = {
      cartTotal: arrSum(totalsArray).toFixed(2),
      meatTotal: arrSum(meatArray).toFixed(2),
      greensTotal: arrSum(greensArray).toFixed(2),
      dairyTotal: arrSum(dairyArray).toFixed(2)
    };

    return totals;
  };

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

    const amount = parseInt(
      $("#total")
        .html()
        .replace("$ ", "")
    );
    const userId = $("#place-order").attr("data-userId");

    console.log(address, amount, userId);

    $.post("/api/placeOrder", {
      total: amount,
      addressId: address,
      userId: userId
    })
      .then(() => {
        console.log("Order complete");
        // localStorage.clear();
        window.location.replace("/complete");
      })
      .catch(err => console.log(err));
  });
});
