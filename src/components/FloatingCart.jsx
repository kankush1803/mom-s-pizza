import { motion } from "framer-motion";

export default function FloatingCart({ cart, onClick }) {
  if (cart.length === 0) return null;

  const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);
  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <motion.div
      initial={{ y: 80, opacity: 0, scale: 0.95 }}
      animate={{ y: 0, opacity: 1, scale: 1 }}
      exit={{ y: 80, opacity: 0, scale: 0.95 }}
      transition={{ type: "spring", stiffness: 300, damping: 25 }}
      className="fixed bottom-[68px] left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] max-w-sm z-40 bg-surface-container/95 backdrop-blur-md text-on-surface p-3 rounded-xl shadow-[0_8px_32px_rgba(0,0,0,0.5)] flex items-center justify-between border border-primary/20 gold-glow"
    >
      <div className="flex items-center gap-3">
        <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center border border-primary/25">
          <span className="material-symbols-outlined text-primary text-xl">shopping_cart</span>
        </div>
        <div className="flex flex-col">
          <span className="text-[10px] font-bold uppercase tracking-widest text-primary">
            {totalItems} {totalItems === 1 ? "Item" : "Items"} Added
          </span>
          <span className="text-sm font-black text-on-surface">
            ₹{totalPrice}
          </span>
        </div>
      </div>
      
      <button 
        onClick={onClick}
        className="flex items-center gap-1 bg-gradient-to-r from-primary to-primary-container text-surface-container-lowest font-black text-xs py-2.5 px-4 rounded-lg shadow-md cursor-pointer hover:scale-[1.03] active:scale-[0.98] transition-all"
      >
        <span>View Order</span>
        <span className="material-symbols-outlined text-sm font-bold">arrow_forward</span>
      </button>
    </motion.div>
  );
}
