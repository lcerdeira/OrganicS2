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


    if (target.is("button")) {
      console.log(target);
      console.log(target.parent().siblings())
      
      const shoppingListItem = {
        itemId: target
          .parent()
          .parent()
          .attr("id"),
        itemName: $(target.parent().siblings()[0]).text(),
        itemPrice: $(target.parent().siblings()[1]).text(),
        itemUnit: $(target.parent().siblings()[2]).text(),
        itemQty: target.parent().siblings().find('input').val()
      };
      storageArray.push(shoppingListItem);
      console.log(storageArray);
      localStorage.setItem("shoppingCart", JSON.stringify(storageArray));
    }
  });
});
