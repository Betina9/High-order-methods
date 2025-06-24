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

//Her velger vi å kun hente inn produkter fra category: electronics. Vi bruker map til å kun få frem navnene på produktet.

const electronicItems = products
  .filter((item) => item.category === "electronics") // steg 1
  .map((item) => item.name); // steg 2

console.log("Electronic product names:", electronicItems);

//Her har vi brukt .some for å finne ut at det er true at vi har produkter over 1000 gullmynter. Etterpå så har jeg satt opp et .filter for å finne ut hvilket produkt det er snakk om.

const hasLuxuryItems = products.some((item) => item.price > 1000);
console.log("Finnes det produkter over 1000 gullmynter?", hasLuxuryItems);

const luxuryItems = products.filter((item) => item.price > 1000);
console.log("Luksusprodukter:", luxuryItems);

//Her bruker vi .reduce for å samle sammen alle tallene/prisene slik at vi får en sammenlagt pris på alle produktene tilsammen.

const totalShopPrice = products.reduce((acc, curr) => acc + curr.price, 0);
console.log("Total shop price:", totalShopPrice);
