import { motion } from "framer-motion";

export default function Hero() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="mt-4 rounded-xl overflow-hidden relative h-64 glass-card animate-fade-in"
    >
      <img
        alt="Hero Pizza"
        className="w-full h-full object-cover opacity-80"
        src="https://lh3.googleusercontent.com/aida-public/AB6AXuDfeu_9LgB_W1KL7LGxsLDHafbr0L-DTIPm0L6EkslVgOLKOh9RVURQrH3PBg1MtLCg8MZAaEzUeP1Y0rUBov-I7bYdLyaDg_SEOuwoNOQ3Q2RYEXmann8T6HlWvelsaL_Cr8WtrqyuvhxXBZnShU9gZOdQK1QHgABJg-VbfSMRMMhJB51hDScyHqMBLG5ci8Zpzo0cnQm9Rt61NQlUuoQbBvu4LkADCQ0Bt9kbwNyWcp1_hXwcabhCupnA2skjiNFXbt6_7Lx3QxKD"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/40 to-transparent"></div>
      <div className="absolute bottom-4 left-4">
        <h2 className="font-display text-2xl font-bold text-primary gold-text-gradient">
          Italian Craftsmanship
        </h2>
        <p className="text-on-surface-variant text-xs font-medium tracking-wide uppercase mt-0.5">
          Gourmet Dining in Siwan
        </p>
      </div>
    </motion.section>
  );
}
