let coffeeShop = {
  name: "Early Mornings",
  tea: ["Tea", 1.2],
  filtercoffee: ["Filter coffee", 1.5],
  cappuccino: ["Cappuccino", 2.0],
  hotchocolate: ["Hot chocolate", 1.8],
  hogspudding: ["Hogs pudding", 1.6],
  laverbread: ["Laverbread", 1.4],
  oatcakes: ["Oatcakes", 2.5],
  fruitpudding: ["Fruit pudding", 2.8],
  englishbreakfast: ["English breakfast", 4.0],
  hamandcheesesandwich: ["Ham and Cheese Sandwich", 3.0],
  tea: () => {
    return "Tea   £ 1.20";
  },

  filtercoffee: () => {
    return "Filter coffe   £ 1.50";
  },
  cappuccino: () => {
    return "Cappuccino   £ 2.00";
  },
  hotchocolate: () => {
    return "Hot chocolate   £ 1.80";
  },
  hogspudding: () => {
    return " Hogs pudding  £ 1.60";
  },
  laverbread: () => {
    return "Laverbread   £ 1.40";
  },
  oatcakes: () => {
    return "Oatcakes   £ 2.50";
  },
  fruitpudding: () => {
    return "Fruit pudding   £ 2.80";
  },
  englishbreakfast: () => {
    return "English breakfast   £ 4.00";
  },
  hamandcheesesandwich: () => {
    return "Ham and Cheese Sandwich   £ 1.20";
  },
};

console.log(coffeeShop["name"]);
console.log("Your order is");
console.log(coffeeShop.englishbreakfast());
console.log(coffeeShop.cappuccino());

let Total = "> 6";
if (Total == ">6") {
  console.log("Total      £ 6.00");
} else if (Total == "<6") {
  ("Thank you");
}

console.log("Total   £ 6.00");
