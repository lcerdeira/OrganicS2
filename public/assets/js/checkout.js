$(document).ready(() => {
  // This file just does a GET request to figure out which user is logged in
  // and updates the HTML on the page
  const arrSum = arr => arr.reduce((a, b) => a + b, 0);
  const totalObj = $("#total");
  const subTotalObj = $("#subTotal");
  const greensObj = $("#greens-total");
  const meatObj = $("#meat-total");
  const dairyObj = $("#dairy-total");

  $.get("/api/user_data").then(data => {
    $("#first-name").val(data.first_name);
    $("#last-name").val(data.last_name);
  });

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

  //   orderButton.on("click", (event) => {
  //     console.log("clicked");
  //     event.preventDefault();
  //     const target = $(event.target);
  //     console.log(target);
  //   });
  // });

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
    console.log(address, amount);

    // function placeOrder(email, password, first_name, last_name) {
    //   $.post("/api/placeOrder", {
    //     email: email,
    //     password: password,
    //     first_name: first_name,
    //     last_name: last_name
    //   })
    //     .then(() => {
    //       window.location.replace("/checkout");
    //       // If there's an error, handle it by throwing up a bootstrap alert
    //     })
    //     .catch(handleLoginErr);
    // }

    // console.log(address);
    // console.log(phone);
    // console.log(email);
  });
});
