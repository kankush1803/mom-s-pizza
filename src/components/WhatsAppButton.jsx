import { motion } from "framer-motion";

export default function WhatsAppButton() {
  return (
    <motion.a
      href="https://wa.me/919304679042?text=Hi%2C%20I%20want%20to%20place%20an%20order%20from%20Mom%27s%20Pizza"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.2, type: "spring", bounce: 0.4 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-24 right-6 z-50 w-14 h-14 bg-primary rounded-full flex items-center justify-center text-on-primary gold-glow shadow-2xl transition-transform"
      aria-label="Order on WhatsApp"
    >
      <span className="material-symbols-outlined text-2xl text-on-primary" style={{ fontVariationSettings: "'FILL' 1" }}>
        chat_bubble
      </span>
    </motion.a>
  );
}
