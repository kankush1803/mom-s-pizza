import { motion } from "framer-motion";

export default function SearchBar({ searchQuery, setSearchQuery, isOpen }) {
  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: "auto" }}
      exit={{ opacity: 0, height: 0 }}
      transition={{ duration: 0.3 }}
      className="px-container-margin py-3 border-b border-white/5 bg-surface/50"
    >
      <div className="relative max-w-md mx-auto">
        <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-primary/50 text-xl">
          search
        </span>
        <input
          type="text"
          placeholder="Search pizza, burgers, Chinese..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full pl-11 pr-10 py-2.5 rounded-xl text-xs
                     bg-surface-container border border-white/10
                     text-on-surface placeholder:text-on-surface-variant/40
                     focus:outline-none focus:border-primary/40 focus:ring-1 focus:ring-primary/20
                     transition-all duration-300 font-body"
          autoFocus
        />
        {searchQuery && (
          <button
            onClick={() => setSearchQuery("")}
            className="absolute right-3 top-1/2 -translate-y-1/2 p-1 rounded-full
                       bg-white/5 hover:bg-white/10 transition-colors flex items-center justify-center border-none"
          >
            <span className="material-symbols-outlined text-xs text-on-surface/50">
              close
            </span>
          </button>
        )}
      </div>
    </motion.div>
  );
}
