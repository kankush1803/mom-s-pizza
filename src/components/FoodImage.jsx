import { useState, useRef, useEffect } from "react";
import { getFoodImageUrl } from "../utils/foodImages";

/**
 * FoodImage — A lazy-loaded, shimmer-animated food image component.
 * 
 * Features:
 * - IntersectionObserver-based lazy loading
 * - Animated shimmer placeholder while loading
 * - Smooth fade-in on load
 * - Consistent aspect ratio via CSS
 * - WebP format from Unsplash CDN
 * - Error fallback with gradient + emoji
 *
 * @param {string} itemName - Menu item name for dynamic matching
 * @param {"card"|"thumbnail"|"featured"} size - Image size preset
 * @param {string} className - Additional CSS classes
 * @param {string} aspectRatio - CSS aspect-ratio value (default: "4/3")
 */
export default function FoodImage({ 
  itemName, 
  size = "card", 
  className = "", 
  aspectRatio = "4/3" 
}) {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const imgRef = useRef(null);

  const imageUrl = getFoodImageUrl(itemName, size);

  // Lazy loading via IntersectionObserver
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" } // Start loading 200px before visible
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={imgRef}
      className={`food-image-container ${className}`}
      style={{ aspectRatio }}
    >
      {/* Shimmer Placeholder */}
      {!loaded && !error && (
        <div className="food-image-shimmer" />
      )}

      {/* Error Fallback */}
      {error && (
        <div className="food-image-fallback">
          <span className="food-image-fallback-emoji">🍽️</span>
        </div>
      )}

      {/* Actual Image */}
      {isVisible && !error && (
        <img
          src={imageUrl}
          alt={itemName}
          loading="lazy"
          decoding="async"
          onLoad={() => setLoaded(true)}
          onError={() => setError(true)}
          className={`food-image ${loaded ? "food-image-loaded" : "food-image-loading"}`}
        />
      )}
    </div>
  );
}
