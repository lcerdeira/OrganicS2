$(document).ready(() => {
  const chTable = $("#shopping-cart");
  const totalObj = $(".total");
  const subTotalObj = $(".subTotal");

  const arrSum = (arr) => arr.reduce((a, b) => a + b, 0);

  if (localStorage.getItem("shoppingCart") !== null) {
    var storageArray = JSON.parse(localStorage.getItem("shoppingCart"));
  } else {
    var storageArray = [];
  }

  for (let i = 0; i < storageArray.length; i++) {
    const currentRow = $(
      "<tr class='shoping__product' id='item" + i + "'></tr>"
    );
    const currentItem = $(
      "<td class='shoping__cart__item'><h5>" +
        storageArray[i].itemName +
        "</h5></td>"
    );
    formatPrice = parseFloat(storageArray[i].itemPrice).toFixed(2);
    const currentPrice = $(
      "<td class='shoping__cart__price'> $" + formatPrice + "</td>"
    );
    const currentQty = $(
      "<td class='shoping__cart__quantity'>" + storageArray[i].itemQty + "</td>"
    );
    let itemTotal = storageArray[i].itemQty * storageArray[i].itemPrice;
    formatItemTotal = itemTotal.toFixed(2);
    const currentItemTotal = $(
      "<td class='shoping__cart__total'> $" + formatItemTotal + "</td>"
    );
    const currentClose = $(
      "<td class='shoping__cart__item__close'><span class='icon_close'></span></td>"
    );
    chTable.append(
      currentRow.append(
        currentItem,
        currentPrice,
        currentQty,
        currentItemTotal,
        currentClose
      )
    );
  }

  calculateTotal = () => {
    let priceArray = [];
    let priceObject = $(".shoping__cart__total");
    $.each(priceObject, (key, value) => {
      let priceText = value.innerText;
      let priceNum = parseFloat(priceText.replace("$", ""));
      priceArray.push(priceNum);
    });
    return arrSum(priceArray);
  };

  updateTotals = () => {
    totalObj.text("$ " + calculateTotal());
    subTotalObj.text("$ " + calculateTotal());
  };

  updateTotals();

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
