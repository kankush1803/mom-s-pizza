// ===================================================
// FOOD IMAGE MAPPING — High-quality food photography
// Uses Pexels CDN for restaurant-quality images
// All images: WebP compatible, consistent aspect ratio, mobile-optimized
// ===================================================

// Curated image URLs mapped to food item names
// Using Pexels CDN which supports on-the-fly resizing via URL params
const FOOD_IMAGE_MAP = {
  // === VEG PIZZAS ===
  "margherita pizza": "https://images.pexels.com/photos/2147491/pexels-photo-2147491.jpeg",
  "mix veg pizza": "https://images.pexels.com/photos/1435907/pexels-photo-1435907.jpeg",
  "mexican veg pizza": "https://images.pexels.com/photos/4109111/pexels-photo-4109111.jpeg",
  "american veg pizza": "https://images.pexels.com/photos/825661/pexels-photo-825661.jpeg",
  "paneer pizza": "https://images.pexels.com/photos/1435907/pexels-photo-1435907.jpeg",
  "butter paneer pizza": "https://images.pexels.com/photos/4109111/pexels-photo-4109111.jpeg",
  "fry paneer pizza": "https://images.pexels.com/photos/825661/pexels-photo-825661.jpeg",
  "tandoori paneer pizza": "https://images.pexels.com/photos/2147491/pexels-photo-2147491.jpeg",
  "makhani paneer pizza": "https://images.pexels.com/photos/4109111/pexels-photo-4109111.jpeg",
  "corn pizza": "https://images.pexels.com/photos/1435907/pexels-photo-1435907.jpeg",
  "onion pizza": "https://images.pexels.com/photos/825661/pexels-photo-825661.jpeg",
  "tomato pizza": "https://images.pexels.com/photos/2147491/pexels-photo-2147491.jpeg",
  "capsicum pizza": "https://images.pexels.com/photos/4109111/pexels-photo-4109111.jpeg",

  // === CHICKEN PIZZAS ===
  "chicken pizza": "https://images.pexels.com/photos/4394612/pexels-photo-4394612.jpeg",
  "butter chicken pizza": "https://images.pexels.com/photos/4394612/pexels-photo-4394612.jpeg",
  "tandoori chicken pizza": "https://images.pexels.com/photos/1566837/pexels-photo-1566837.jpeg",
  "grill chicken pizza": "https://images.pexels.com/photos/1566837/pexels-photo-1566837.jpeg",
  "chicken margherita pizza": "https://images.pexels.com/photos/4394612/pexels-photo-4394612.jpeg",
  "arabian chicken pizza": "https://images.pexels.com/photos/1566837/pexels-photo-1566837.jpeg",
  "mexican chicken pizza": "https://images.pexels.com/photos/4394612/pexels-photo-4394612.jpeg",

  // === BURGERS ===
  "veg burger": "https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg",
  "veg cheese burger": "https://images.pexels.com/photos/3616956/pexels-photo-3616956.jpeg",
  "tandoori paneer burger": "https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg",
  "paneer burger": "https://images.pexels.com/photos/3616956/pexels-photo-3616956.jpeg",
  "chicken burger": "https://images.pexels.com/photos/1199957/pexels-photo-1199957.jpeg",
  "chicken cheese burger": "https://images.pexels.com/photos/1199957/pexels-photo-1199957.jpeg",
  "kfc type chicken burger": "https://images.pexels.com/photos/2282532/pexels-photo-2282532.jpeg",
  "cheese kfc type chicken burger": "https://images.pexels.com/photos/2282532/pexels-photo-2282532.jpeg",

  // === PASTA ===
  "veg pasta": "https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg",
  "paneer pasta": "https://images.pexels.com/photos/1438672/pexels-photo-1438672.jpeg",
  "chicken pasta": "https://images.pexels.com/photos/1438672/pexels-photo-1438672.jpeg",

  // === BIRYANI ===
  "hyderabadi chicken biryani": "https://images.pexels.com/photos/7394819/pexels-photo-7394819.jpeg",
  "kfc type chicken biryani": "https://images.pexels.com/photos/7394819/pexels-photo-7394819.jpeg",
  "rice chicken bowl": "https://images.pexels.com/photos/723198/pexels-photo-723198.jpeg",

  // === CHINESE VEG ===
  "paneer chilli": "https://images.pexels.com/photos/2116094/pexels-photo-2116094.jpeg",
  "mushroom chilli": "https://images.pexels.com/photos/2116094/pexels-photo-2116094.jpeg",
  "baby corn chilli": "https://images.pexels.com/photos/2116094/pexels-photo-2116094.jpeg",
  "paneer fried rice": "https://images.pexels.com/photos/723198/pexels-photo-723198.jpeg",
  "paneer noodles": "https://images.pexels.com/photos/2347311/pexels-photo-2347311.jpeg",
  "veg noodles": "https://images.pexels.com/photos/2347311/pexels-photo-2347311.jpeg",
  "baby corn crispy": "https://images.pexels.com/photos/2116094/pexels-photo-2116094.jpeg",

  // === CHINESE NON-VEG ===
  "chicken chilli": "https://images.pexels.com/photos/2338407/pexels-photo-2338407.jpeg",
  "chicken lollipop": "https://images.pexels.com/photos/2338407/pexels-photo-2338407.jpeg",
  "chicken noodles": "https://images.pexels.com/photos/2347311/pexels-photo-2347311.jpeg",
  "chicken crispy": "https://images.pexels.com/photos/60616/fried-chicken-chicken-fried-crunchy-60616.jpeg",
  "chicken fried rice": "https://images.pexels.com/photos/723198/pexels-photo-723198.jpeg",

  // === ROLLS ===
  "special chicken egg roll": "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg",
  "special paneer roll": "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg",

  // === SOUPS ===
  "chicken soup": "https://images.pexels.com/photos/539451/pexels-photo-539451.jpeg",
  "chicken manchow soup": "https://images.pexels.com/photos/539451/pexels-photo-539451.jpeg",
  "veg soup": "https://images.pexels.com/photos/1731535/pexels-photo-1731535.jpeg",
  "veg manchow soup": "https://images.pexels.com/photos/1731535/pexels-photo-1731535.jpeg",

  // === ROTI / NAAN ===
  "plain paratha": "https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg",
  "lachha paratha": "https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg",
  "butter naan": "https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg",
  "plain naan": "https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg",
  "stuffed naan": "https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg",
  "garlic naan": "https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg",
  "paneer kulcha": "https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg",

  // === RICE ===
  "plain rice": "https://images.pexels.com/photos/723198/pexels-photo-723198.jpeg",
  "jeera rice": "https://images.pexels.com/photos/723198/pexels-photo-723198.jpeg",

  // === KFC CHICKEN ===
  "chicken leg": "https://images.pexels.com/photos/60616/fried-chicken-chicken-fried-crunchy-60616.jpeg",
  "chicken wings": "https://images.pexels.com/photos/2338407/pexels-photo-2338407.jpeg",
  "chicken popcorn": "https://images.pexels.com/photos/60616/fried-chicken-chicken-fried-crunchy-60616.jpeg",
  "chicken strip": "https://images.pexels.com/photos/60616/fried-chicken-chicken-fried-crunchy-60616.jpeg",
};

// Keyword-based fallback categories
const KEYWORD_FALLBACKS = [
  { keywords: ["pizza"], url: "https://images.pexels.com/photos/2147491/pexels-photo-2147491.jpeg" },
  { keywords: ["burger"], url: "https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg" },
  { keywords: ["pasta", "noodle"], url: "https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg" },
  { keywords: ["biryani", "rice", "pulao"], url: "https://images.pexels.com/photos/7394819/pexels-photo-7394819.jpeg" },
  { keywords: ["chicken", "kfc", "wings", "leg", "popcorn", "strip", "crispy", "lollipop"], url: "https://images.pexels.com/photos/60616/fried-chicken-chicken-fried-crunchy-60616.jpeg" },
  { keywords: ["soup", "broth"], url: "https://images.pexels.com/photos/539451/pexels-photo-539451.jpeg" },
  { keywords: ["roll", "wrap", "kathi"], url: "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg" },
  { keywords: ["naan", "roti", "paratha", "kulcha", "chapati", "bread"], url: "https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg" },
  { keywords: ["chilli", "manchurian", "chinese"], url: "https://images.pexels.com/photos/2116094/pexels-photo-2116094.jpeg" },
  { keywords: ["paneer", "cottage"], url: "https://images.pexels.com/photos/2116094/pexels-photo-2116094.jpeg" },
  { keywords: ["mushroom", "corn", "veg"], url: "https://images.pexels.com/photos/1731535/pexels-photo-1731535.jpeg" },
];

// Default fallback
const DEFAULT_IMAGE = "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg";

/**
 * Build a Pexels CDN URL with specific dimensions.
 * Pexels CDN supports on-the-fly resizing via query params:
 * - auto=compress: enables compression
 * - cs=tinysrgb: color space optimization
 * - w=WIDTH: desired width
 * - h=HEIGHT: desired height
 * - fit=crop: crops to exact dimensions
 *
 * @param {string} baseUrl - Base Pexels image URL
 * @param {number} width - Desired width
 * @param {number} height - Desired height
 * @returns {string} Optimized image URL
 */
function buildOptimizedUrl(baseUrl, width, height) {
  return `${baseUrl}?auto=compress&cs=tinysrgb&w=${width}&h=${height}&fit=crop`;
}

/**
 * Get optimized food image URL for a given item name.
 * Uses Pexels CDN with on-the-fly resizing for consistent sizing.
 *
 * @param {string} itemName - The name of the menu item
 * @param {"card"|"thumbnail"|"featured"} size - Size preset
 * @returns {string} Optimized image URL
 */
export function getFoodImageUrl(itemName, size = "card") {
  const nameLower = itemName.toLowerCase().trim();

  // Size presets — 2x for retina, served compressed
  const sizes = {
    thumbnail: { w: 200, h: 200 },   // 1:1 thumbnails (pizza, table rows)
    card: { w: 400, h: 300 },         // 4:3 grid cards
    featured: { w: 600, h: 338 },     // 16:9 featured/hero
  };

  const { w, h } = sizes[size] || sizes.card;

  // 1. Direct match
  let baseUrl = FOOD_IMAGE_MAP[nameLower];

  // 2. Keyword fallback
  if (!baseUrl) {
    const match = KEYWORD_FALLBACKS.find((fb) =>
      fb.keywords.some((kw) => nameLower.includes(kw))
    );
    baseUrl = match ? match.url : DEFAULT_IMAGE;
  }

  return buildOptimizedUrl(baseUrl, w, h);
}

/**
 * Preload critical food images for faster first paint.
 * Call this on app mount with the names of visible items.
 *
 * @param {string[]} itemNames - Array of item names to preload
 */
export function preloadFoodImages(itemNames) {
  itemNames.forEach((name) => {
    const url = getFoodImageUrl(name, "card");
    const link = document.createElement("link");
    link.rel = "preload";
    link.as = "image";
    link.href = url;
    document.head.appendChild(link);
  });
}
