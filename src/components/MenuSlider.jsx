import { useEffect, useRef, useState, useCallback } from "react";
import { motion } from "framer-motion";
import MenuSection from "./MenuSection";

export default function MenuSlider({ menuSections, activeCategory, setActiveCategory, addToCart, searchQuery }) {
  const containerRef = useRef(null);
  const slideRefs = useRef({});
  const [activeHeight, setActiveHeight] = useState("auto");
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  
  const isManualScroll = useRef(false);
  const manualScrollTimeout = useRef(null);

  // Check if we can scroll left/right to show/hide arrows
  const checkScroll = useCallback(() => {
    const container = containerRef.current;
    if (!container) return;

    const { scrollLeft, scrollWidth, clientWidth } = container;
    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 10);
  }, []);

  // Set up resize observer for active slide height
  useEffect(() => {
    const activeEl = slideRefs.current[activeCategory];
    if (!activeEl) return;

    const resizeObserver = new ResizeObserver((entries) => {
      for (let entry of entries) {
        // Set the active height container to match actual DOM offset height
        const height = activeEl.offsetHeight;
        if (height > 0) {
          setActiveHeight(height);
        }
      }
    });

    resizeObserver.observe(activeEl);

    // Initial measure
    setActiveHeight(activeEl.offsetHeight || "auto");

    return () => {
      resizeObserver.disconnect();
    };
  }, [activeCategory, searchQuery]);

  // Synchronize horizontal scrolling when the parent activeCategory changes (e.g. from chip click)
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const targetSlide = slideRefs.current[activeCategory];
    if (targetSlide) {
      const isAlreadyAtTarget = Math.abs(container.scrollLeft - targetSlide.offsetLeft) < 5;
      if (!isAlreadyAtTarget) {
        isManualScroll.current = true;
        if (manualScrollTimeout.current) clearTimeout(manualScrollTimeout.current);

        container.scrollTo({
          left: targetSlide.offsetLeft,
          behavior: "smooth",
        });

        // Lock manual observer updates during scrolling transition
        manualScrollTimeout.current = setTimeout(() => {
          isManualScroll.current = false;
        }, 600);
      }
    }
  }, [activeCategory]);

  // IntersectionObserver to update active category chip on swipe/scroll
  useEffect(() => {
    const container = containerRef.current;
    if (!container || searchQuery) return;

    const observerOptions = {
      root: container,
      rootMargin: "0px -35% 0px -35%", // Detect when slide passes the center portion
      threshold: 0.3,
    };

    const observerCallback = (entries) => {
      if (isManualScroll.current) return;

      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const categoryId = entry.target.getAttribute("data-category-id");
          if (categoryId && categoryId !== activeCategory) {
            setActiveCategory(categoryId);
          }
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    const slides = container.querySelectorAll("[data-slide]");
    slides.forEach((slide) => observer.observe(slide));

    return () => {
      slides.forEach((slide) => observer.unobserve(slide));
      observer.disconnect();
    };
  }, [menuSections, searchQuery, activeCategory, setActiveCategory]);

  // Set up scroll/resize listeners for navigation arrow updates
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    container.addEventListener("scroll", checkScroll, { passive: true });
    window.addEventListener("resize", checkScroll);

    // Initial check after renders
    checkScroll();
    const timer = setTimeout(checkScroll, 100);

    return () => {
      container.removeEventListener("scroll", checkScroll);
      window.removeEventListener("resize", checkScroll);
      clearTimeout(timer);
    };
  }, [menuSections, checkScroll]);

  // Arrow click scroll handlers
  const scrollLeft = () => {
    const container = containerRef.current;
    if (!container) return;
    const slideWidth = container.clientWidth;
    container.scrollBy({
      left: -slideWidth,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    const container = containerRef.current;
    if (!container) return;
    const slideWidth = container.clientWidth;
    container.scrollBy({
      left: slideWidth,
      behavior: "smooth",
    });
  };

  return (
    <div id="menu-slider-container" className="relative w-full">
      {/* Left Arrow Button for Desktop */}
      <button
        onClick={scrollLeft}
        className={`absolute left-[-20px] top-1/2 -translate-y-1/2 z-40 w-10 h-10 rounded-full glass-card hover:bg-primary hover:text-surface-container-lowest text-primary border border-primary/20 shadow-[0_0_15px_rgba(242,202,80,0.15)] flex items-center justify-center cursor-pointer transition-all duration-300 hover:scale-110 md:flex hidden ${
          canScrollLeft ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        aria-label="Previous Category"
      >
        <span className="material-symbols-outlined font-bold text-base leading-none">arrow_back_ios_new</span>
      </button>

      {/* Right Arrow Button for Desktop */}
      <button
        onClick={scrollRight}
        className={`absolute right-[-20px] top-1/2 -translate-y-1/2 z-40 w-10 h-10 rounded-full glass-card hover:bg-primary hover:text-surface-container-lowest text-primary border border-primary/20 shadow-[0_0_15px_rgba(242,202,80,0.15)] flex items-center justify-center cursor-pointer transition-all duration-300 hover:scale-110 md:flex hidden ${
          canScrollRight ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        aria-label="Next Category"
      >
        <span className="material-symbols-outlined font-bold text-base leading-none">arrow_forward_ios</span>
      </button>

      {/* Animated Height Container */}
      <motion.div
        animate={{ height: activeHeight }}
        transition={{ type: "spring", stiffness: 180, damping: 24 }}
        className="w-full overflow-hidden"
      >
        {/* Horizontal Scroll Layout */}
        <div
          ref={containerRef}
          className="flex w-full overflow-x-auto snap-x snap-mandatory scroll-smooth hide-scrollbar gap-6 pb-2"
          style={{ WebkitOverflowScrolling: "touch" }}
        >
          {menuSections.map((section) => {
            const isActive = section.id === activeCategory;
            return (
              <div
                key={section.id}
                data-slide
                data-category-id={section.id}
                className="w-full shrink-0 snap-start snap-always"
              >
                {/* Inner wrapper for active size measuring */}
                <div
                  ref={(el) => {
                    if (el) slideRefs.current[section.id] = el;
                  }}
                  className="w-full pb-24"
                >
                  <MenuSection
                    id={section.id}
                    title={section.title}
                    emoji={section.emoji}
                    items={section.items}
                    layoutType={section.layoutType}
                    isVeg={section.isVeg}
                    searchQuery={searchQuery}
                    addToCart={addToCart}
                    isActive={isActive}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
}
