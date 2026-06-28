"use strict";
var PizzaType;
(function (PizzaType) {
    PizzaType[PizzaType["Margherita"] = 0] = "Margherita";
    PizzaType[PizzaType["Pepperoni"] = 1] = "Pepperoni";
    PizzaType[PizzaType["Hawaiian"] = 2] = "Hawaiian";
    PizzaType[PizzaType["Vegetarian"] = 3] = "Vegetarian";
})(PizzaType || (PizzaType = {}));
var PizzaSize;
(function (PizzaSize) {
    PizzaSize[PizzaSize["Small"] = 0] = "Small";
    PizzaSize[PizzaSize["Medium"] = 1] = "Medium";
    PizzaSize[PizzaSize["Large"] = 2] = "Large";
})(PizzaSize || (PizzaSize = {}));
let order = {
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
