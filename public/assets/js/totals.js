const arrSum = arr => arr.reduce((a, b) => a + b, 0);
const cartQty = $(".itemQty");
const cartTotalObj = $(".cartTotal");

let storageArray = [];
if (localStorage.getItem("shoppingCart") !== null) {
  storageArray = JSON.parse(localStorage.getItem("shoppingCart"));
}
numItems = storageArray.length;
cartQty.html(numItems);

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
totals = calculateTotals();
cartTotalObj.html(totals.cartTotal);
