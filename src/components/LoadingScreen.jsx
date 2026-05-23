import { motion, AnimatePresence } from "framer-motion";

export default function LoadingScreen() {
  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-surface"
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Ambient glow */}
        <div className="absolute w-[300px] h-[300px] rounded-full bg-primary/10 blur-[120px]" />

        {/* Logo / brand */}
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative z-10 flex flex-col items-center"
        >
          <span className="text-5xl mb-4">🍕</span>
          <h1 className="font-display text-3xl font-bold gold-text-gradient mb-2">
            Mom&apos;s Pizza
          </h1>
          <p className="text-primary/60 text-xs tracking-[0.3em] uppercase">
            &amp; Cafe
          </p>
        </motion.div>

        {/* Loading ring */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-10"
        >
          <div className="w-10 h-10 rounded-full border-2 border-primary/20 border-t-primary loader-ring animate-spin" />
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="mt-6 text-primary/40 text-[10px] tracking-widest uppercase"
        >
          Loading Premium Menu...
        </motion.p>
      </motion.div>
    </AnimatePresence>
  );
}
