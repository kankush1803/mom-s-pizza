// ===================================================
// COMPLETE MENU DATA — Mom's Pizza & Cafe
// ===================================================

export const vegPizzaMenu = [
  {
    name: "Margherita Pizza",
    ingredients: "Only Cheese",
    prices: { S: 130, R: 200, M: 260, L: 330 },
  },
  {
    name: "Mix Veg Pizza",
    ingredients: "Cheese, Onion, Tomato, Capsicum, Jalapeno",
    prices: { S: 150, R: 230, M: 290, L: 360 },
  },
  {
    name: "Mexican Veg Pizza",
    ingredients: "Cheese, Onion, Tomato, Capsicum, Jalapeno, Red Paprika",
    prices: { S: 150, R: 240, M: 300, L: 380 },
  },
  {
    name: "American Veg Pizza",
    ingredients: "Cheese, Onion, Tomato, Capsicum, Jalapeno, Corn",
    prices: { S: 170, R: 250, M: 310, L: 390 },
  },
  {
    name: "Paneer Pizza",
    ingredients: "Cheese, Onion, Tomato, Capsicum, Jalapeno, Paneer",
    prices: { S: 170, R: 260, M: 320, L: 410 },
  },
  {
    name: "Butter Paneer Pizza",
    ingredients: "Cheese, Onion, Tomato, Capsicum, Jalapeno, Paneer",
    prices: { S: 180, R: 280, M: 340, L: 430 },
  },
  {
    name: "Fry Paneer Pizza",
    ingredients: "Cheese, Onion, Tomato, Capsicum, Jalapeno, Fry Paneer",
    prices: { S: 180, R: 270, M: 330, L: 410 },
  },
  {
    name: "Tandoori Paneer Pizza",
    ingredients: "Cheese, Onion, Tomato, Capsicum, Jalapeno, Tandoori Paneer",
    prices: { S: 210, R: 300, M: 360, L: 430 },
  },
  {
    name: "Makhani Paneer Pizza",
    ingredients: "Cheese, Onion, Tomato, Capsicum, Jalapeno, Makhani Paneer",
    prices: { S: 210, R: 300, M: 360, L: 430 },
  },
  {
    name: "Corn Pizza",
    ingredients: "Cheese, Onion",
    prices: { S: 150, R: 230, M: 270, L: 360 },
  },
  {
    name: "Onion Pizza",
    ingredients: "Cheese, Onion",
    prices: { S: 150, R: 230, M: 270, L: 360 },
  },
  {
    name: "Tomato Pizza",
    ingredients: "Cheese, Tomato",
    prices: { S: 150, R: 230, M: 270, L: 360 },
  },
  {
    name: "Capsicum Pizza",
    ingredients: "Cheese, Capsicum",
    prices: { S: 150, R: 230, M: 270, L: 360 },
  },
];

export const chickenPizzaSingle = [
  { name: "Chicken Pizza", prices: { S: 99, R: 150, M: 250, L: 300 } },
  { name: "Butter Chicken Pizza", prices: { S: 130, R: 170, M: 230, L: 280 } },
  { name: "Tandoori Chicken Pizza", prices: { S: 140, R: 180, M: 230, L: 280 } },
  { name: "Grill Chicken Pizza", prices: { S: 140, R: 180, M: 230, L: 280 } },
  { name: "Chicken Margherita Pizza", prices: { S: 99, R: 140, M: 200, L: 250 } },
  { name: "Arabian Chicken Pizza", prices: { S: 150, R: 200, M: 250, L: 300 } },
];

export const chickenPizzaFour = [
  { name: "Chicken Pizza", prices: { S: 130, R: 190, M: 290, L: 350 } },
  { name: "Butter Chicken Pizza", prices: { S: 160, R: 210, M: 270, L: 330 } },
  { name: "Tandoori Chicken Pizza", prices: { S: 170, R: 220, M: 270, L: 330 } },
  { name: "Grill Chicken Pizza", prices: { S: 170, R: 220, M: 270, L: 330 } },
  { name: "Mexican Chicken Pizza", prices: { S: 170, R: 220, M: 270, L: 330 } },
  { name: "Arabian Chicken Pizza", prices: { S: 180, R: 240, M: 290, L: 350 } },
];

export const burgers = [
  { name: "Veg Burger", price: 60, isVeg: true },
  { name: "Veg Cheese Burger", price: 79, isVeg: true },
  { name: "Tandoori Paneer Burger", price: 90, isVeg: true },
  { name: "Paneer Burger", price: 80, isVeg: true },
  { name: "Chicken Burger", price: 70, isVeg: false },
  { name: "Chicken Cheese Burger", price: 90, isVeg: false },
  { name: "KFC Type Chicken Burger", price: 80, isVeg: false },
  { name: "Cheese KFC Type Chicken Burger", price: 110, isVeg: false },
];

export const pasta = [
  { name: "Veg Pasta", price: 120, isVeg: true },
  { name: "Paneer Pasta", price: 180, isVeg: true },
  { name: "Chicken Pasta", price: 180, isVeg: false },
];

export const biryani = [
  { name: "Hyderabadi Chicken Biryani", priceParts: [{ qty: "Half", price: 90 }, { qty: "Full", price: 150 }], isVeg: false },
  { name: "KFC Type Chicken Biryani", priceParts: [{ qty: "Half", price: 100 }, { qty: "Full", price: 160 }], isVeg: false },
  { name: "Rice Chicken Bowl", priceParts: [{ qty: "1 Bowl", price: 160 }], isVeg: false },
];

export const chineseVeg = [
  { name: "Paneer Chilli", prices: { Half: 130, Full: 230 }, isVeg: true },
  { name: "Mushroom Chilli", prices: { Half: 70, Full: 160 }, isVeg: true },
  { name: "Baby Corn Chilli", prices: { Half: 90, Full: 190 }, isVeg: true },
  { name: "Paneer Fried Rice", prices: { Half: 130, Full: 210 }, isVeg: true },
  { name: "Paneer Noodles", prices: { Half: 90, Full: 150 }, isVeg: true },
  { name: "Veg Noodles", prices: { Half: 60, Full: 110 }, isVeg: true },
  { name: "Baby Corn Crispy", prices: { Half: 110, Full: 210 }, isVeg: true },
];

export const chineseNonVeg = [
  { name: "Chicken Chilli", prices: { Half: 120, Full: 230 }, isVeg: false },
  { name: "Chicken Lollipop", prices: { Half: 70, Full: 140 }, isVeg: false },
  { name: "Chicken Noodles", prices: { Half: 90, Full: 190 }, isVeg: false },
  { name: "Chicken Crispy", prices: { Half: 140, Full: 250 }, isVeg: false },
  { name: "Chicken Fried Rice", prices: { Half: 150, Full: 250 }, isVeg: false },
];

export const rolls = [
  { name: "Special Chicken Egg Roll", price: 90, isVeg: false },
  { name: "Special Paneer Roll", price: 90, isVeg: true },
];

export const soups = [
  { name: "Chicken Soup", price: 120, isVeg: false },
  { name: "Chicken Manchow Soup", price: 140, isVeg: false },
  { name: "Veg Soup", price: 90, isVeg: true },
  { name: "Veg Manchow Soup", price: 110, isVeg: true },
];

export const rotiNaan = [
  { name: "Plain Paratha", price: 20, isVeg: true },
  { name: "Lachha Paratha", price: 25, isVeg: true },
  { name: "Butter Naan", price: 35, isVeg: true },
  { name: "Plain Naan", price: 25, isVeg: true },
  { name: "Stuffed Naan", price: 40, isVeg: true },
  { name: "Garlic Naan", price: 55, isVeg: true },
  { name: "Paneer Kulcha", price: 60, isVeg: true },
];

export const rice = [
  { name: "Plain Rice", prices: { Half: 40, Full: 70 }, isVeg: true },
  { name: "Jeera Rice", prices: { Half: 50, Full: 90 }, isVeg: true },
];

export const kfcChicken = [
  { name: "Chicken Leg", priceParts: [{ qty: "2 pcs", price: 150 }, { qty: "4 pcs", price: 280 }], isVeg: false },
  { name: "Chicken Wings", priceParts: [{ qty: "4 pcs", price: 100 }, { qty: "8 pcs", price: 180 }], isVeg: false },
  { name: "Chicken Popcorn", priceParts: [{ qty: "3 pcs", price: 130 }, { qty: "6 pcs", price: 230 }], isVeg: false },
  { name: "Chicken Lollipop", priceParts: [{ qty: "5 pcs", price: 200 }], isVeg: false },
  { name: "Chicken Strip", priceParts: [{ qty: "5 pcs", price: 200 }], isVeg: false },
];

export const featuredItems = [
  { name: "Tandoori Paneer Pizza", tag: "Chef's Special", emoji: "🍕" },
  { name: "Arabian Chicken Pizza", tag: "Most Popular", emoji: "🍗" },
  { name: "Chicken Crispy", tag: "Crunchy Hit", emoji: "🍗" },
  { name: "Chicken Lollipop", tag: "Best Seller", emoji: "🍖" },
  { name: "KFC Type Chicken", tag: "Must Try", emoji: "🍗" },
  { name: "Makhani Paneer Pizza", tag: "Premium", emoji: "🍕" },
];

// Category definitions with emoji & IDs
export const categories = [
  { id: "veg-pizza", label: "Veg Pizza", emoji: "🍕" },
  { id: "chicken-single", label: "Chicken (1 Cheese)", emoji: "🍗" },
  { id: "chicken-four", label: "Chicken (4 Cheese)", emoji: "🧀" },
  { id: "kfc-chicken", label: "KFC Chicken", emoji: "🍗" },
  { id: "biryani", label: "Biryani", emoji: "🍚" },
  { id: "burgers", label: "Burgers", emoji: "🍔" },
  { id: "pasta", label: "Pasta", emoji: "🍝" },
  { id: "chinese-veg", label: "Chinese Veg", emoji: "🥡" },
  { id: "chinese-nonveg", label: "Chinese NV", emoji: "🥢" },
  { id: "rolls", label: "Rolls", emoji: "🌯" },
  { id: "soups", label: "Soups", emoji: "🍜" },
  { id: "roti-naan", label: "Roti / Naan", emoji: "🫓" },
  { id: "rice", label: "Rice", emoji: "🍚" },
];
