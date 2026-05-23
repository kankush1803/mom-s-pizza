import { motion } from "framer-motion";

export default function Header({ onSearchToggle, isSearchOpen }) {
  return (
    <header className="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-xl border-b border-white/10 flex items-center justify-between px-container-margin h-11 w-full max-w-md mx-auto left-0 right-0">
      <div className="w-6"></div>
      <h1 
        className="font-display text-lg font-bold text-primary tracking-tight cursor-pointer"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        Mom&apos;s Pizza &amp; Cafe
      </h1>
      <button 
        className={`material-symbols-outlined hover:opacity-80 transition-opacity cursor-pointer border-none bg-transparent ${isSearchOpen ? "text-white" : "text-primary"}`}
        onClick={onSearchToggle}
      >
        {isSearchOpen ? "close" : "search"}
      </button>
    </header>
  );
}
