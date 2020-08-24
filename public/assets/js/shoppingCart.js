$(document).ready(() => {
  const chTable = $("#shopping-cart");
  const totalObj = $("#total");
  const subTotalObj = $("#subTotal");

  let storageArray = [];

  if (localStorage.getItem("shoppingCart") !== null) {
    storageArray = JSON.parse(localStorage.getItem("shoppingCart"));
  }

  for (let i = 0; i < storageArray.length; i++) {
    const currentRow = $(
      "<tr class='shopping__product' id='item" + i + "'></tr>"
    );
    const currentItem = $(
      "<td class='shopping__cart__item'><h5>" +
        storageArray[i].itemName +
        "</h5></td>"
    );
    formatPrice = parseFloat(storageArray[i].itemPrice).toFixed(2);
    const currentPrice = $(
      "<td class='shopping__cart__price'> $" + formatPrice + "</td>"
    );
    const currentQty = $(
      "<td class='shopping__cart__quantity'>" +
        storageArray[i].itemQty +
        "</td>"
    );
    const itemTotal = storageArray[i].itemQty * storageArray[i].itemPrice;
    formatItemTotal = itemTotal.toFixed(2);
    const currentItemTotal = $(
      "<td class='shopping__cart__total'> $" + formatItemTotal + "</td>"
    );
    const currentClose = $("<td class='shopping__cart__item__close'></td>");

    const currentCloseButton = $(
      "<span class='icon_close close-button'></span>"
    );

    chTable.append(
      currentRow.append(
        currentItem,
        currentPrice,
        currentQty,
        currentItemTotal,
        currentClose.append(currentCloseButton)
      )
    );
  }
  cartTotals = calculateTotals();

  updateTotals = () => {
    totalObj.text("$ " + cartTotals.cartTotal);
    subTotalObj.text("$ " + cartTotals.cartTotal);
  };

  updateTotals();

  const removeItem = $(".close-button");
  removeItem.on("click", event => {
    idCode = $(event.target)
      .closest("tr")
      .attr("id");
    id = idCode.replace("item", "");
    storageArray.splice(id, 1);
    localStorage.setItem("shoppingCart", JSON.stringify(storageArray));
    location.reload();
  });

  // Lookat oninput
  // var proQty = $(".pro-qty");
  // proQty.prepend('<span class="dec qtybtn">-</span>');
  // proQty.append('<span class="inc qtybtn">+</span>');
  // proQty.on("click", ".qtybtn", function() {
  //   var $button = $(this);
  //   var oldValue = $button
  //     .parent()
  //     .find("input")
  //     .val();
  //   if ($button.hasClass("inc")) {
  //     var newVal = parseFloat(oldValue) + 1;
  //   } else {
  //     // Don't allow decrementing below zero
  //     if (oldValue > 0) {
  //       var newVal = parseFloat(oldValue) - 1;
  //     } else {
  //       newVal = 0;
  //     }
  //   }
  //   $button
  //     .parent()
  //     .find("input")
  //     .val(newVal);
  // });
});
