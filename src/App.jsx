import { useState, useEffect, useCallback } from "react";
import { AnimatePresence } from "framer-motion";

import LoadingScreen from "./components/LoadingScreen";
import Header from "./components/Header";
import Hero from "./components/Hero";
import CategoryNav from "./components/CategoryNav";
import SearchBar from "./components/SearchBar";
import MenuSection from "./components/MenuSection";
import FeaturedItems from "./components/FeaturedItems";
import WhatsAppButton from "./components/WhatsAppButton";
import BottomNav from "./components/BottomNav";
import Footer from "./components/Footer";
import Orders from "./components/Orders";

import {
  categories,
  vegPizzaMenu,
  chickenPizzaSingle,
  chickenPizzaFour,
  burgers,
  pasta,
  biryani,
  chineseVeg,
  chineseNonVeg,
  rolls,
  soups,
  rotiNaan,
  rice,
  kfcChicken,
} from "./data/menuData";

// Map category IDs to their data and display config matching code.html
const menuSections = [
  { id: "veg-pizza", title: "Veg Pizza Selection", emoji: "🍕", items: vegPizzaMenu, layoutType: "pizza", isVeg: true },
  { id: "chicken-single", title: "Chicken Pizza (Single Cheese)", emoji: "🍗", items: chickenPizzaSingle, layoutType: "pizza", isVeg: false },
  { id: "chicken-four", title: "Chicken Pizza (Four Cheese)", emoji: "🧀", items: chickenPizzaFour, layoutType: "pizza", isVeg: false },
  { id: "kfc-chicken", title: "KFC Type Chicken", emoji: "🍗", items: kfcChicken, layoutType: "kfc" },
  { id: "biryani", title: "Biryani", emoji: "🍚", items: biryani, layoutType: "kfc" },
  { id: "burgers", title: "Gourmet Burgers", emoji: "🍔", items: burgers, layoutType: "grid" },
  { id: "pasta", title: "Pasta", emoji: "🍝", items: pasta, layoutType: "grid" },
  { id: "chinese-veg", title: "Chinese Veg", emoji: "🥡", items: chineseVeg, layoutType: "table" },
  { id: "chinese-nonveg", title: "Chinese Non Veg", emoji: "🥢", items: chineseNonVeg, layoutType: "table" },
  { id: "rolls", title: "Rolls", emoji: "🌯", items: rolls, layoutType: "grid" },
  { id: "soups", title: "Soups", emoji: "🍜", items: soups, layoutType: "grid" },
  { id: "roti-naan", title: "Roti / Naan", emoji: "🫓", items: rotiNaan, layoutType: "grid" },
  { id: "rice", title: "Rice", emoji: "🍚", items: rice, layoutType: "table" },
];

export default function App() {
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState(categories[0].id);
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("menu");
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart((prev) => {
      const existing = prev.find((i) => i.name === item.name && i.size === item.size);
      if (existing) {
        return prev.map((i) =>
          i.name === item.name && i.size === item.size ? { ...i, qty: i.qty + 1 } : i
        );
      }
      return [...prev, { ...item, qty: 1 }];
    });
  };

  const removeFromCart = (itemIndex) => {
    setCart((prev) => prev.filter((_, idx) => idx !== itemIndex));
  };

  const checkoutWhatsApp = () => {
    if (cart.length === 0) return;
    const itemsText = cart.map(item => `${item.qty}x ${item.name} ${item.size ? `(${item.size})` : ''} - ₹${item.price * item.qty}`).join('\n');
    const total = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
    const text = `Hi! I would like to place an order:\n\n${itemsText}\n\nTotal: ₹${total}`;
    window.open(`https://wa.me/919304679042?text=${encodeURIComponent(text)}`, "_blank");
  };

  // Loading screen timer
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1600);
    return () => clearTimeout(timer);
  }, []);

  // Scroll spy to update the active category in the header bar
  const handleScroll = useCallback(() => {
    const scrollY = window.scrollY;
    const offset = 180;
    
    for (let i = categories.length - 1; i >= 0; i--) {
      const el = document.getElementById(categories[i].id);
      if (el && scrollY >= el.offsetTop - offset) {
        setActiveCategory(categories[i].id);
        break;
      }
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  // Click on a category in nav scrolls to section
  const handleCategoryClick = (id) => {
    setActiveCategory(id);
    const el = document.getElementById(id);
    if (el) {
      const offset = 120;
      const y = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <div className="bg-surface text-on-surface min-h-screen font-body selection:bg-primary selection:text-on-primary">
      {/* Loading Screen */}
      <AnimatePresence>
        {loading && <LoadingScreen />}
      </AnimatePresence>

      {/* Top Sticky Header */}
      {activeTab === "menu" && (
        <Header 
          isSearchOpen={isSearchOpen} 
          onSearchToggle={() => {
            if (isSearchOpen) setSearchQuery("");
            setIsSearchOpen(!isSearchOpen);
          }} 
        />
      )}

      {/* Main Content Area */}
      <main className="pb-20 max-w-md mx-auto px-container-margin pt-12">
        {/* Search Panel */}
        <AnimatePresence>
          {isSearchOpen && (
            <SearchBar 
              searchQuery={searchQuery} 
              setSearchQuery={setSearchQuery} 
              isOpen={isSearchOpen}
            />
          )}
        </AnimatePresence>

        {activeTab === "menu" ? (
          <>
            {/* Hero Banner */}
            <Hero />

            {/* Sticky Category Bar */}
            <CategoryNav
              activeCategory={activeCategory}
              onCategoryClick={handleCategoryClick}
            />

            {/* Specials Carousel */}
            {!searchQuery && <FeaturedItems />}

            {/* Menu Categories */}
            <div className="space-y-section-gap">
              {menuSections.map((section) => (
                <MenuSection
                  key={section.id}
                  id={section.id}
                  title={section.title}
                  emoji={section.emoji}
                  items={section.items}
                  layoutType={section.layoutType}
                  isVeg={section.isVeg}
                  searchQuery={searchQuery}
                  addToCart={addToCart}
                />
              ))}
            </div>
          </>
        ) : (
          <Orders 
            cart={cart} 
            removeFromCart={removeFromCart} 
            checkoutWhatsApp={checkoutWhatsApp} 
            setActiveTab={setActiveTab} 
          />
        )}

        {/* Footer */}
        <Footer />
      </main>

      {/* Floating Order FAB (Hide if in orders tab) */}
      {activeTab === "menu" && <WhatsAppButton />}

      {/* Mobile Bottom Navigation */}
      <BottomNav activeTab={activeTab} setActiveTab={setActiveTab} cartCount={cart.reduce((sum, item) => sum + item.qty, 0)} />
    </div>
  );
}
