import { motion } from "framer-motion";

const navItems = [
  { id: "menu", icon: "restaurant_menu", label: "Menu" },
  { id: "orders", icon: "receipt_long", label: "Orders" },
];

export default function BottomNav({ activeTab, setActiveTab, cartCount }) {

  return (
    <nav className="fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-4 pt-1.5 pb-1.5 h-14 bg-surface-container/90 backdrop-blur-2xl border-t border-white/10 rounded-t-xl shadow-[0_-4px_20px_rgba(242,202,80,0.1)] w-full max-w-md mx-auto right-0">
      {navItems.map((item) => {
        const isActive = activeTab === item.id;
        return (
          <button
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            className="flex flex-col items-center justify-center border-none bg-transparent cursor-pointer relative"
          >
            {isActive ? (
              <motion.div
                layoutId="bottomNavTab"
                className="flex flex-col items-center justify-center text-primary bg-primary/10 rounded-xl px-4 py-1.5 transition-all duration-300"
              >
                <span className="material-symbols-outlined text-primary text-xl relative">
                  {item.icon}
                  {item.id === "orders" && cartCount > 0 && (
                    <span className="absolute -top-1 -right-2 bg-error text-white text-[8px] font-bold px-1.5 py-0.5 rounded-full min-w-[16px] text-center">
                      {cartCount}
                    </span>
                  )}
                </span>
                <span className="font-semibold text-[9px] uppercase tracking-wider mt-0.5">
                  {item.label}
                </span>
              </motion.div>
            ) : (
              <div className="flex flex-col items-center justify-center text-on-surface-variant hover:text-primary transition-all duration-300 px-4 py-1.5">
                <span className="material-symbols-outlined text-on-surface-variant text-xl relative">
                  {item.icon}
                  {item.id === "orders" && cartCount > 0 && (
                    <span className="absolute -top-1 -right-2 bg-error text-white text-[8px] font-bold px-1.5 py-0.5 rounded-full min-w-[16px] text-center">
                      {cartCount}
                    </span>
                  )}
                </span>
                <span className="text-[9px] uppercase tracking-wider mt-0.5 text-on-surface-variant/70">
                  {item.label}
                </span>
              </div>
            )}
          </button>
        );
      })}
    </nav>
  );
}
