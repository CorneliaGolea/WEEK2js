let orderCount = 0;

const takeOrder = (topping) => {
  console.log(`Pizza with ${topping}`);
  orderCount++;
};

takeOrder("pineapple");

takeOrder("Ham");
