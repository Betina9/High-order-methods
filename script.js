const gold = 200; //our money
const products = [
  { name: "Smartphone", price: 800, category: "electronics" },
  { name: "Headphones", price: 150, category: "electronics" },
  { name: "Coffee Maker", price: 100, category: "home appliances" },
  { name: "Blender", price: 250, category: "home appliances" },
  { name: "Laptop", price: 1200, category: "electronics" },
  { name: "T-shirt", price: 50, category: "clothing" },
  { name: "Sneakers", price: 300, category: "clothing" },
];
//Her henter vi frem de produktene som koster 200 mynter eller mindre
const affordableItems = products.filter((item) => item.price <= gold);
console.log(`With ${gold} gold, we can afford`, affordableItems);
//Her går vi tilbake til listen vår for å hente frem alle navnene til produktene
const productNames = products.map((item) => item.name);
console.log("productNames:", productNames);
//Her velger vi å kun hente inn produkter fra category: electronics
const electronicItems = products.filter(
  (item) => item.category === "electronics"
);
console.log(`Electronic products in our store:`, electronicItems);
