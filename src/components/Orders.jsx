import { motion } from "framer-motion";

export default function Orders({ cart, removeFromCart, updateQuantity, checkoutWhatsApp, setActiveTab }) {
  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  if (cart.length === 0) {
    return (
      <div className="min-h-[65vh] flex flex-col items-center justify-center text-center animate-fade-in">
        <div className="w-24 h-24 bg-surface-container rounded-full flex items-center justify-center mb-6">
          <span className="material-symbols-outlined text-4xl text-on-surface-variant/50">
            shopping_bag
          </span>
        </div>
        <h2 className="font-display text-2xl font-bold text-primary mb-2">Your Order is Empty</h2>
        <p className="text-on-surface-variant text-sm mb-8">
          Looks like you haven't added anything to your order yet.
        </p>
        <button
          onClick={() => setActiveTab("menu")}
          className="bg-primary text-on-primary font-bold px-8 py-3 rounded-xl shadow-[0_0_20px_rgba(242,202,80,0.3)] hover:scale-105 transition-all cursor-pointer"
        >
          Browse Menu
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-[75vh] flex flex-col justify-center py-10 animate-fade-in">
      <h2 className="font-display text-2xl font-bold text-primary mb-6 flex items-center justify-center gap-2">
        <span className="material-symbols-outlined">receipt_long</span>
        Your Order
      </h2>

      <div className="space-y-3 mb-8">
        {cart.map((item, idx) => (
          <div key={idx} className="glass-card p-4 rounded-xl flex items-center justify-between gap-4">
            <div className="flex-1 min-w-0">
              <h4 className="font-bold text-on-surface text-sm truncate">{item.name}</h4>
              {item.size && <p className="text-xs text-primary/80 mt-0.5">{item.size}</p>}
              <p className="text-on-surface-variant text-xs mt-1">₹{item.price} each</p>
            </div>
            
            <div className="flex items-center gap-3.5 flex-shrink-0">
              {/* Quantity Controls */}
              <div className="flex items-center bg-surface-container/80 rounded-lg p-0.5 border border-white/5">
                <button
                  onClick={() => updateQuantity(idx, -1)}
                  className="w-7 h-7 rounded-md text-on-surface-variant hover:text-primary active:scale-95 hover:bg-white/5 transition-all flex items-center justify-center border-none bg-transparent cursor-pointer text-sm"
                  title="Decrease Quantity"
                >
                  <span className="material-symbols-outlined text-sm font-bold">remove</span>
                </button>
                <span className="text-xs font-bold text-on-surface min-w-[20px] text-center select-none">
                  {item.qty}
                </span>
                <button
                  onClick={() => updateQuantity(idx, 1)}
                  className="w-7 h-7 rounded-md text-on-surface-variant hover:text-primary active:scale-95 hover:bg-white/5 transition-all flex items-center justify-center border-none bg-transparent cursor-pointer text-sm"
                  title="Increase Quantity"
                >
                  <span className="material-symbols-outlined text-sm font-bold">add</span>
                </button>
              </div>

              <div className="flex items-center gap-2">
                <span className="font-bold text-primary text-sm min-w-[52px] text-right">
                  ₹{item.price * item.qty}
                </span>
                
                <button
                  onClick={() => removeFromCart(idx)}
                  className="w-8 h-8 rounded-full bg-error/10 text-error flex items-center justify-center hover:bg-error/20 transition-colors cursor-pointer border-none"
                  title="Remove Item"
                >
                  <span className="material-symbols-outlined text-[16px]">delete</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="glass-card p-5 rounded-2xl border border-primary/20 bg-primary/5 mt-6 mb-6">
        <div className="flex justify-between items-center mb-6">
          <span className="text-on-surface-variant font-medium">Total Amount</span>
          <span className="text-2xl font-bold text-primary">₹{total}</span>
        </div>
        <button
          onClick={checkoutWhatsApp}
          className="w-full bg-[#25D366] text-white font-bold py-3.5 rounded-xl flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(37,211,102,0.3)] hover:scale-[1.02] transition-all cursor-pointer border-none"
        >
          <span className="material-symbols-outlined">send</span>
          Send Order via WhatsApp
        </button>
      </div>
    </div>
  );
}
