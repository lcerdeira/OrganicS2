$(document).ready(() => {
  // This file just does a GET request to figure out which user is logged in
  // and updates the HTML on the page
  const arrSum = (arr) => arr.reduce((a, b) => a + b, 0);
  const totalObj = $("#total");
  const subTotalObj = $("#subTotal");
  const greensObj = $("#greens-total");
  const meatObj = $("#meat-total");
  const dairyObj = $("#dairy-total");

  $.get("/api/user_data").then((data) => {
    $("#first-name").val(data.first_name);
    $("#last-name").val(data.last_name);

    calculateTotals = () => {
      let totalsArray = [];
      let meatArray = [];
      let greensArray = [];
      let dairyArray = [];

      if (localStorage.getItem("shoppingCart") !== null) {
        var storageArray = JSON.parse(localStorage.getItem("shoppingCart"));
      } else {
        var storageArray = [];
      }
      storageArray.forEach((element) => {
        let elementTotal = element.itemPrice * element.itemQty;
        if (element.itemCategory === "meat") {
          meatArray.push(elementTotal);
        } else if (element.itemCategory === "greens") {
          greensArray.push(elementTotal);
        } else if (element.itemCategory === "dairy") {
          dairyArray.push(elementTotal);
        }

        totalsArray.push(elementTotal);
      });

      let totals={
        cartTotal: arrSum(totalsArray).toFixed(2),
        meatTotal: arrSum(meatArray).toFixed(2),
        greensTotal: arrSum(greensArray).toFixed(2),
        dairyTotal: arrSum(dairyArray).toFixed(2)
      };

      return totals;
    };

    cartTotals=calculateTotals()

    updateTotals = () => {

      greensObj .text("$ " + cartTotals.greensTotal);
      meatObj.text("$ " + cartTotals.meatTotal);
     dairyObj.text("$ " + cartTotals.dairyTotal);
      totalObj.text("$ " + cartTotals.cartTotal);
      subTotalObj.text("$ " + cartTotals.cartTotal);
    };
  
    updateTotals();

    
    
  });
});
