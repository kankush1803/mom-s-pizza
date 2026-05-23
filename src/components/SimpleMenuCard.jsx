import { motion } from "framer-motion";
import FoodImage from "./FoodImage";

export default function SimpleMenuCard({ item, addToCart }) {
  const isVeg = item.isVeg !== false;

  const handleOrder = () => {
    addToCart({ name: item.name, price: item.price });
  };

  return (
    <motion.div
      whileHover={{ y: -4, borderColor: "rgba(242, 202, 80, 0.4)" }}
      className="glass-card rounded-xl overflow-hidden text-center flex flex-col justify-between hover:border-primary/40 transition-all duration-300"
    >
      {/* Food Image */}
      <div className="relative">
        <FoodImage itemName={item.name} size="card" aspectRatio="4/3" />
        {/* Veg/Nonveg badge overlay */}
        <div className="absolute top-2 left-2 bg-surface/80 backdrop-blur-sm rounded-md p-0.5 border border-white/10">
          <span className={isVeg ? "veg-dot" : "nonveg-dot"} />
        </div>
      </div>
      
      <div className="p-3 flex flex-col flex-1 justify-between">
        <div>
          <h4 className="text-xs font-bold text-on-surface line-clamp-2 min-h-[32px] flex items-center justify-center">
            {item.name}
          </h4>
          <p className="text-primary font-bold text-sm mt-1">₹{item.price}</p>
        </div>
        
        {/* Order Action Button */}
        <button
          onClick={handleOrder}
          className="mt-2.5 w-full bg-primary/10 hover:bg-primary text-primary hover:text-on-primary border border-primary/20 hover:border-transparent rounded-lg py-1.5 text-[9px] font-bold tracking-wider uppercase transition-all duration-300 flex items-center justify-center gap-1 cursor-pointer"
        >
          <span className="material-symbols-outlined text-xs">add_shopping_cart</span>
          <span>Add</span>
        </button>
      </div>
    </motion.div>
  );
}
