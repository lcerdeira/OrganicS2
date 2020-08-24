$(document).ready(() => {
  const listEl = $("#item-list");

  let storageArray = [];
  if (localStorage.getItem("shoppingCart") !== null) {
    storageArray = JSON.parse(localStorage.getItem("shoppingCart"));
  }

  listEl.on("click", () => {
    event.preventDefault();
    const target = $(event.target);

    if (target.is("button")) {
      const shoppingListItem = {
        itemId: target
          .parent()
          .parent()
          .attr("id"),
        itemName: $(target.parent().siblings()[0]).text(),
        itemPrice: $(target.parent().siblings()[1]).text(),
        itemUnit: $(target.parent().siblings()[2]).text(),
        itemQty: target
          .parent()
          .siblings()
          .find("input")
          .val(),
        itemCategory: target
          .parent()
          .parent()
          .attr("data-category")
      };
      storageArray.push(shoppingListItem);
      localStorage.setItem("shoppingCart", JSON.stringify(storageArray));
    }
  });
});
