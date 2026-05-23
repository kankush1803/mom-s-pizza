export default function Footer() {
  return (
    <footer className="mt-section-gap mb-28 text-center px-container-margin">
      <div className="h-px w-24 bg-primary mx-auto mb-8"></div>
      <h4 className="font-display text-xl font-bold text-primary mb-2">
        Mom&apos;s Pizza &amp; Cafe
      </h4>
      <p className="text-xs text-center text-on-surface-variant leading-relaxed max-w-sm mx-auto">
        Siwan Road Near V Bazaar, Narainian Mirganj
      </p>
      <p className="text-primary text-center font-bold text-xs mt-4 tracking-wider">
        Open Daily: 10:00 AM - 10:00 PM
      </p>
      
      {/* Social Icons */}
      <div className="flex justify-center gap-4 mt-6">
        <a 
          className="w-10 h-10 rounded-full border border-primary/30 flex items-center justify-center text-primary hover:bg-primary/10 transition-colors" 
          href="https://wa.me/919304679042"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp"
        >
          <span className="material-symbols-outlined text-lg">chat</span>
        </a>
        <a 
          className="w-10 h-10 rounded-full border border-primary/30 flex items-center justify-center text-primary hover:bg-primary/10 transition-colors" 
          href="#"
          aria-label="Instagram"
        >
          <span className="material-symbols-outlined text-lg">photo_camera</span>
        </a>
        <a 
          className="w-10 h-10 rounded-full border border-primary/30 flex items-center justify-center text-primary hover:bg-primary/10 transition-colors" 
          href="#"
          aria-label="Website"
        >
          <span className="material-symbols-outlined text-lg">public</span>
        </a>
      </div>
      
      <p className="text-[9px] text-on-surface-variant/40 mt-10 uppercase tracking-widest">
        Made with ❤️ for food lovers
      </p>
    </footer>
  );
}
