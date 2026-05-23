import { motion } from "framer-motion";
import FoodImage from "./FoodImage";

const featuredData = [
  {
    name: "Tandoori Paneer Pizza",
    description: "Spiced cottage cheese with tandoori infusion.",
    targetId: "veg-pizza"
  },
  {
    name: "Arabian Chicken Pizza",
    description: "Exotic Middle-Eastern flavors & spices.",
    targetId: "chicken-single"
  },
  {
    name: "Chicken Crispy",
    description: "Golden-fried, crunchy chicken bites.",
    targetId: "chinese-nonveg"
  },
  {
    name: "KFC Type Chicken Biryani",
    description: "Crispy chicken layered with aromatic rice.",
    targetId: "biryani"
  },
];

export default function FeaturedItems() {
  const handleScrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 120;
      const y = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <section className="mt-section-gap animate-fade-in">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-display text-lg font-bold text-primary">Chef&apos;s Specials</h3>
        <span className="text-primary text-xs font-semibold hover:underline cursor-pointer">
          View All
        </span>
      </div>
      <div className="flex gap-4 overflow-x-auto hide-scrollbar -mx-2 px-2 pb-2">
        {featuredData.map((item) => (
          <motion.div
            key={item.name}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleScrollToSection(item.targetId)}
            className="flex-none w-64 glass-card rounded-xl cursor-pointer hover:border-primary/40 transition-colors overflow-hidden"
          >
            {/* Food Image - uses featured size for high quality */}
            <FoodImage itemName={item.name} size="featured" aspectRatio="16/9" />

            <div className="p-3">
              <h4 className="font-display text-sm font-bold text-primary mb-1">
                {item.name}
              </h4>
              <p className="text-xs text-on-surface-variant leading-relaxed">
                {item.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
