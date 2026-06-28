enum PizzaType {
  Margherita,
  Pepperoni,
  Hawaiian,
  Vegetarian
}

enum PizzaSize {
  Small,
  Medium,
  Large
}

interface Order {
  customerName: string;
  pizzaType: PizzaType;
}
let order: Order = {
  customerName: "Alice",
  pizzaType: PizzaType.Pepperoni
};
console.log(order.customerName);
console.log(order.pizzaType);
//la commande de pizza : 
switch (order.pizzaType) {
  case PizzaType.Margherita:
    console.log(`Préparation de la pizza margherita pour ${order.customerName}...`);
    break;
  case PizzaType.Pepperoni:
    console.log(`Préparation de la pizza pepperoni pour ${order.customerName}...`);
    break;
  case PizzaType.Hawaiian:
    console.log(`Préparation de la pizza hawaiian pour ${order.customerName}...`);
    break;
  case PizzaType.Vegetarian:
    console.log(`Préparation de la pizza végétarienne pour ${order.customerName}...`);
    break;
}


