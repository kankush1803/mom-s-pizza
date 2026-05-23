import { motion } from "framer-motion";
import { categories } from "../data/menuData";

export default function CategoryNav({ activeCategory, onCategoryClick }) {
  return (
    <div className="mt-4 bg-surface-container-low/80 backdrop-blur-md p-2 rounded-2xl border border-white/5">
      <p className="text-[9px] text-primary/70 font-semibold uppercase tracking-widest mb-2 px-1 text-center">
        Jump to Menu Section
      </p>

      <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-7 gap-2">
        {categories.map((cat) => {
          const isActive = activeCategory === cat.id;
          return (
            <motion.button
              key={cat.id}
              onClick={() => onCategoryClick(cat.id)}
              whileTap={{ scale: 0.95 }}
              className={`
                flex flex-col items-center justify-center p-2 rounded-xl border transition-all duration-300 cursor-pointer min-h-[64px]
                ${isActive
                  ? "bg-primary/20 text-primary border-primary/45 shadow-[0_0_10px_rgba(242,202,80,0.1)]"
                  : "bg-surface-container/40 text-on-surface-variant/80 border-white/5 hover:border-primary/20 hover:text-primary"
                }
              `}
            >
              <span className="text-xl mb-1">{cat.emoji}</span>
              <span className="text-[9px] font-bold tracking-tight text-center leading-none uppercase w-full truncate">
                {cat.label}
              </span>
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}
