import { motion } from "framer-motion";
import { categories } from "../data/menuData";

export default function CategoryNav({ activeCategory, onCategoryClick }) {
  return (
    <div className="mt-4 bg-surface-container-low/80 backdrop-blur-md p-3.5 rounded-2xl border border-white/5 shadow-xl">
      <p className="text-[9px] text-primary/70 font-semibold uppercase tracking-widest mb-3 px-1 text-center">
        Jump to Menu Category
      </p>

      <div className="grid grid-cols-4 gap-2">
        {categories.map((cat) => {
          const isActive = activeCategory === cat.id;
          return (
            <motion.button
              key={cat.id}
              onClick={() => onCategoryClick(cat.id)}
              whileTap={{ scale: 0.95 }}
              whileHover={{ scale: 1.02 }}
              className={`
                flex flex-col items-center justify-center p-2 rounded-xl border transition-all duration-300 cursor-pointer min-h-[68px]
                ${isActive
                  ? "bg-gradient-to-br from-primary/20 to-primary-container/5 text-primary border-primary shadow-[0_0_12px_rgba(242,202,80,0.25)] scale-[1.02]"
                  : "bg-surface-container/30 text-on-surface-variant/80 border-white/5 hover:border-primary/30 hover:text-primary hover:bg-surface-container/50"
                }
              `}
            >
              <span className="text-xl mb-1">{cat.emoji}</span>
              <span className="text-[8px] sm:text-[9px] font-bold tracking-tight text-center leading-tight uppercase w-full truncate">
                {cat.label}
              </span>
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}
