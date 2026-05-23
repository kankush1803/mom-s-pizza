import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FoodImage from "./FoodImage";

export default function PizzaCard({ item, isVeg = true, defaultExpanded = false, addToCart }) {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded);

  const minPrice = item.prices ? Math.min(...Object.values(item.prices)) : 0;

  const handleOrder = (size, price) => {
    const sizeLabel = size === "S" ? "Small" : size === "R" ? "Regular" : size === "M" ? "Medium" : "Large";
    addToCart({ name: item.name, size: sizeLabel, price: price });
  };

  return (
    <div 
      className="glass-card rounded-xl overflow-hidden hover:border-primary/40 transition-all duration-300"
    >
      {/* Collapsed Header with Thumbnail */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full text-left p-3 flex items-center justify-between gap-3 focus:outline-none cursor-pointer"
      >
        <div className="flex items-center gap-3 min-w-0">
          {/* Thumbnail Image */}
          <div className="w-12 h-12 rounded-lg overflow-hidden flex-shrink-0 border border-white/10">
            <FoodImage 
              itemName={item.name} 
              size="thumbnail" 
              aspectRatio="1/1" 
              className="!rounded-lg"
            />
          </div>

          <div className="min-w-0">
            <div className="flex items-center gap-2">
              <span className={isVeg ? "veg-dot" : "nonveg-dot"} />
              <h4 className="font-display font-bold text-sm text-on-surface hover:text-primary transition-colors truncate">
                {item.name}
              </h4>
            </div>
            {item.ingredients && (
              <p className="text-[10px] text-on-surface-variant truncate max-w-[200px] mt-0.5 ml-[22px]">
                {item.ingredients}
              </p>
            )}
          </div>
        </div>
        <div className="flex items-center gap-2.5 flex-shrink-0">
          {!isExpanded && (
            <span className="text-primary font-bold text-xs bg-primary/10 px-2 py-1 rounded border border-primary/20">
              From ₹{minPrice}
            </span>
          )}
          <span className="material-symbols-outlined text-primary/80 text-lg transition-transform duration-300" style={{
            transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)'
          }}>
            expand_more
          </span>
        </div>
      </button>

      {/* Expanded Grid */}
      <AnimatePresence initial={false}>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="px-4 pb-4 pt-1 border-t border-white/5 bg-white/[0.02]">
              <p className="text-[9px] text-primary/60 font-semibold tracking-wide mb-2.5 flex items-center gap-1">
                <span className="material-symbols-outlined text-[10px]">add</span>
                Tap a size below to add to your order:
              </p>
              
              <div className="grid grid-cols-4 gap-2 text-center text-xs font-semibold">
                {Object.entries(item.prices).map(([size, price]) => (
                  <button 
                    key={size}
                    onClick={() => handleOrder(size, price)}
                    className="bg-surface-container hover:bg-primary/10 rounded-lg p-2 border border-white/5 hover:border-primary/40 transition-all group flex flex-col items-center justify-between min-h-[64px] cursor-pointer"
                  >
                    <div className="text-[8px] text-on-surface-variant/80 font-bold uppercase tracking-wider mb-1">
                      {size === "S" ? "S (Small)" : size === "R" ? "R (Reg)" : size === "M" ? "M (Med)" : "L (Large)"}
                    </div>
                    <div className="text-primary font-bold text-sm group-hover:scale-105 transition-transform">
                      ₹{price}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
