$(document).ready(() => {
  const listEl = $("#item-list");

  if (localStorage.getItem("shoppingCart") !== null) {
    var storageArray = JSON.parse(localStorage.getItem("shoppingCart"));
  } else {
    var storageArray = [];
  }

  listEl.on("click", () => {
    console.log("clicked");
    event.preventDefault();
    const target = $(event.target);
    const shoppingListItem = {
      itemId: target
        .parent()
        .parent()
        .attr("id"),
      itemName: $(target.parent().siblings()[0]).text(),
      itemPrice: $(target.parent().siblings()[1]).text(),
      itemQty: 3,
      itemUnit: $(target.parent().siblings()[2]).text(),
    };
    storageArray.push(shoppingListItem);
    console.log(storageArray);
    localStorage.setItem("shoppingCart", JSON.stringify(storageArray));
  });
});
