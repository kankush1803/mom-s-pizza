import PizzaCard from "./PizzaCard";
import SimpleMenuCard from "./SimpleMenuCard";
import FoodImage from "./FoodImage";

export default function MenuSection({ id, title, emoji, items, layoutType, isVeg, searchQuery, addToCart }) {
  // Filter items based on search query
  const filteredItems = searchQuery
    ? items.filter((item) =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (item.ingredients && item.ingredients.toLowerCase().includes(searchQuery.toLowerCase()))
      )
    : items;

  if (filteredItems.length === 0) return null;

  const handleTableOrder = (itemName, portionSize, price) => {
    if (!price || price === "-") return;
    addToCart({ name: itemName, size: portionSize, price: price });
  };

  const handleKfcOrder = (itemName, qty, price) => {
    addToCart({ name: itemName, size: qty, price: price });
  };

  return (
    <section id={id} className="scroll-mt-24 mt-section-gap animate-fade-in">
      {/* Section Header with Golden Gradient Lines */}
      <div className="flex items-center gap-3 mb-6">
        <div className="h-px flex-1 bg-gradient-to-r from-transparent to-primary/30"></div>
        <h3 className="font-display text-sm sm:text-base font-bold text-primary tracking-wide text-center">
          {emoji} {title}
        </h3>
        <div className="h-px flex-1 bg-gradient-to-l from-transparent to-primary/30"></div>
      </div>

      {/* Render Pizza Layout */}
      {layoutType === "pizza" && (
        <div className="space-y-3">
          {/* S R M L Price Legend */}
          <div className="grid grid-cols-4 gap-2 px-2 py-2 glass-card rounded-lg text-center text-[9px] font-bold text-primary uppercase tracking-widest">
            <span>S</span>
            <span>R</span>
            <span>M</span>
            <span>L</span>
          </div>
          {filteredItems.map((item, idx) => (
            <PizzaCard 
              key={item.name} 
              item={item} 
              isVeg={isVeg !== false} 
              defaultExpanded={idx === 0 && !searchQuery} 
              addToCart={addToCart}
            />
          ))}
        </div>
      )}

      {/* Render Grid Layout */}
      {layoutType === "grid" && (
        <div className="grid grid-cols-2 gap-3">
          {filteredItems.map((item) => (
            <SimpleMenuCard 
              key={item.name} 
              item={item} 
              addToCart={addToCart}
            />
          ))}
        </div>
      )}

      {/* Render Table Layout (Chinese, Biryani, Rice) */}
      {layoutType === "table" && (
        <div className="glass-card rounded-xl overflow-hidden border border-white/5">
          <div className="text-[8px] text-primary/60 font-semibold tracking-wide px-3 py-2 border-b border-white/5 bg-white/[0.01] flex items-center gap-1">
            <span className="material-symbols-outlined text-[10px]">chat</span>
            <span>Tap any price cell to add to order</span>
          </div>
          
          <table className="w-full text-left text-xs sm:text-sm">
            <thead className="bg-white/5 text-primary border-b border-white/5 font-bold uppercase tracking-wider">
              <tr>
                <th className="p-3 text-left">Item</th>
                <th className="p-3 text-right">Half</th>
                <th className="p-3 text-right">Full</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5 text-on-surface">
              {filteredItems.map((item) => {
                const isVegItem = item.isVeg !== false;
                const halfPrice = item.prices?.Half || item.prices?.half || item.price || "-";
                const fullPrice = item.prices?.Full || item.prices?.full || item.price || "-";

                return (
                  <tr key={item.name} className="hover:bg-white/[0.02] transition-colors">
                    <td className="p-3 font-medium">
                      <div className="flex items-center gap-2.5">
                        {/* Mini thumbnail for table rows */}
                        <div className="w-10 h-10 rounded-lg overflow-hidden flex-shrink-0 border border-white/10">
                          <FoodImage 
                            itemName={item.name} 
                            size="thumbnail" 
                            aspectRatio="1/1" 
                            className="!rounded-lg"
                          />
                        </div>
                        <div className="flex items-center gap-1.5 min-w-0">
                          <span className={isVegItem ? "veg-dot" : "nonveg-dot"} />
                          <span className="truncate">{item.name}</span>
                        </div>
                      </div>
                    </td>
                    
                    {/* Half Price Button Cell */}
                    <td className="p-1.5 text-right">
                      {halfPrice !== "-" ? (
                        <button
                          onClick={() => handleTableOrder(item.name, "Half", halfPrice)}
                          className="w-full text-right py-1.5 px-2.5 rounded-lg hover:bg-primary/10 text-primary hover:scale-[1.03] transition-all font-semibold border border-transparent hover:border-primary/20 cursor-pointer bg-transparent"
                        >
                          ₹{halfPrice}
                        </button>
                      ) : (
                        <span className="text-on-surface-variant/40 px-2.5">-</span>
                      )}
                    </td>

                    {/* Full Price Button Cell */}
                    <td className="p-1.5 text-right">
                      {fullPrice !== "-" ? (
                        <button
                          onClick={() => handleTableOrder(item.name, "Full", fullPrice)}
                          className="w-full text-right py-1.5 px-2.5 rounded-lg hover:bg-primary/10 text-primary hover:scale-[1.03] transition-all font-semibold border border-transparent hover:border-primary/20 cursor-pointer bg-transparent"
                        >
                          ₹{fullPrice}
                        </button>
                      ) : (
                        <span className="text-on-surface-variant/40 px-2.5">-</span>
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}

      {/* Render KFC Layout */}
      {layoutType === "kfc" && (
        <div className="grid gap-3">
          {filteredItems.map((item) => {
            const isVegItem = item.isVeg !== false;
            return (
              <div 
                key={item.name} 
                className="glass-card rounded-xl overflow-hidden flex flex-col"
              >
                {/* Food Image Banner */}
                <div className="relative">
                  <FoodImage itemName={item.name} size="card" aspectRatio="16/9" />
                  <div className="food-image-overlay"></div>
                  {/* Veg/Nonveg badge */}
                  <div className="absolute top-2.5 left-2.5 bg-surface/80 backdrop-blur-sm rounded-md p-0.5 border border-white/10">
                    <span className={isVegItem ? "veg-dot" : "nonveg-dot"} />
                  </div>
                  {/* Item name overlay at bottom */}
                  <div className="absolute bottom-0 left-0 right-0 p-3">
                    <h4 className="font-display font-bold text-base text-on-surface drop-shadow-lg">
                      {item.name}
                    </h4>
                  </div>
                </div>

                <div className="p-3">
                  <p className="text-[8px] text-primary/60 font-semibold tracking-wide flex items-center gap-1 mb-2.5">
                    <span className="material-symbols-outlined text-[10px]">chat</span>
                    <span>Tap a size/quantity box to order:</span>
                  </p>

                  <div className="flex gap-2">
                    {item.priceParts ? (
                      item.priceParts.map((part) => (
                        <button 
                          key={part.qty}
                          onClick={() => handleKfcOrder(item.name, part.qty, part.price)}
                          className="flex-1 bg-surface-container hover:bg-primary/10 rounded-lg py-2 px-3 text-center border border-white/5 hover:border-primary/35 transition-all cursor-pointer"
                        >
                          <span className="text-[8px] text-on-surface-variant/80 block uppercase font-bold tracking-wide mb-0.5">
                            {part.qty}
                          </span>
                          <span className="text-primary font-bold text-xs">
                            ₹{part.price}
                          </span>
                        </button>
                      ))
                    ) : (
                      <button
                        onClick={() => handleKfcOrder(item.name, "Single Item", item.price)}
                        className="bg-surface-container hover:bg-primary/10 rounded-lg py-2 px-4 text-primary font-bold text-xs border border-white/5 hover:border-primary/35 transition-all cursor-pointer"
                      >
                        ₹{item.price}
                      </button>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </section>
  );
}
