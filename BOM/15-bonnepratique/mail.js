const data = [
    {id: 1, value: "Item 1"},
    {id: 2, value: "Item 2"},
    {id: 3, value: "Item 3"}
];

const resultElement = document.getElementById("result");

function processItems() {
    data.forEach((item) => {
        const listItem = document.createElement("li");
        listItem.innerHTML = `ID : ${item.id}, Value : ${item.value}`;
        resultElement.appendChild(listItem);

        item.processed = true;
    });
}

function checkProcessedItems() {
    const allProcessed = data.every((item) => item.processed);
    return allProcessed ? "All items processed" : "Some items not processed";
}

processItems();
console.log(checkProcessedItems());
console.log(data);
const products = [
  { name: 'T-shirt', price: 20 },
  { name: 'Jeans', price: 50 },
  { name: 'Sneakers', price: 80 }
];

for (const product of products) {
  console.log(`${product.name} - ${product.price}`);
}