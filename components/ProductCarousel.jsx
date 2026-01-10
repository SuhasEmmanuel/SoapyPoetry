'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const ProductCarousel = ({ products }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const containerRef = useRef(null);

  const visibleProducts = 4; // Number of products visible at once
  const totalProducts = products.length;

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => 
      prevIndex + 1 >= totalProducts - visibleProducts + 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => 
      prevIndex - 1 < 0 ? totalProducts - visibleProducts : prevIndex - 1
    );
  };

  const goToSlide = (index) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  // Auto-play functionality
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [currentIndex, totalProducts, visibleProducts]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') prevSlide();
      if (e.key === 'ArrowRight') nextSlide();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const slideVariants = {
    hiddenRight: {
      x: 300,
      opacity: 0,
      scale: 0.95,
    },
    hiddenLeft: {
      x: -300,
      opacity: 0,
      scale: 0.95,
    },
    visible: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: [0.25, 0.46, 0.45, 0.94], // Custom cubic-bezier for smoothness
        type: "tween",
      },
    },
    exit: {
      x: direction > 0 ? -300 : 300,
      opacity: 0,
      scale: 0.95,
      transition: {
        duration: 0.4,
        ease: [0.55, 0.085, 0.68, 0.53], // Custom cubic-bezier for smooth exit
        type: "tween",
      },
    },
  };

  const dotsVariants = {
    initial: { scale: 0.8, opacity: 0.5 },
    animate: { scale: 1, opacity: 1 },
    hover: { scale: 1.2, opacity: 1 },
  };

  return (
    <div className="relative w-full" ref={containerRef}>
      {/* Main Carousel Container */}
      <div className="relative overflow-hidden rounded-2xl">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={slideVariants}
            initial={direction > 0 ? 'hiddenRight' : 'hiddenLeft'}
            animate="visible"
            exit="exit"
            className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-6"
          >
            {products.slice(currentIndex, currentIndex + visibleProducts).map((product, index) => (
              <motion.div
                key={`${product.id}-${currentIndex}`}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ 
                  delay: index * 0.1, 
                  duration: 0.6,
                  ease: [0.25, 0.46, 0.45, 0.94],
                  type: "tween"
                }}
                className="aspect-[3/4]"
              >
                <div className="relative w-full h-full group">
                  {/* Product Image with Hover Effect */}
                  <div className="relative w-full h-full overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 ease-out">
                    <motion.img
                      src={product.img}
                      alt={product.name}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ 
                        duration: 0.8,
                        ease: [0.25, 0.46, 0.45, 0.94]
                      }}
                    />
                    
                    {/* Overlay with Product Name */}
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"
                      initial={{ opacity: 1 }}
                      animate={{ opacity: 1 }}
                      transition={{ 
                        duration: 0.4,
                        ease: [0.25, 0.46, 0.45, 0.94]
                      }}
                    >
                      <motion.div 
                        className="absolute bottom-0 left-0 right-0 p-4"
                        initial={{ y: 0, opacity: 1 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ 
                          duration: 0.3,
                          delay: 0.1,
                          ease: [0.25, 0.46, 0.45, 0.94]
                        }}
                      >
                        <h3 className="font-display font-semibold text-white text-lg text-center">
                          {product.name}
                        </h3>
                      </motion.div>
                    </motion.div>

                    {/* Shimmer Effect */}
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                      initial={{ x: '-100%' }}
                      whileHover={{ x: '100%' }}
                      transition={{ 
                        duration: 1.2,
                        ease: [0.25, 0.46, 0.45, 0.94]
                      }}
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Buttons */}
      <motion.button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-[#8a584c]/80 backdrop-blur-sm text-[#f5eacf] hover:bg-[#8a584c] shadow-lg"
        aria-label="Previous products"
        whileHover={{ scale: 1.1, backgroundColor: '#8a584c' }}
        whileTap={{ scale: 0.95 }}
        transition={{ 
          duration: 0.2,
          ease: [0.25, 0.46, 0.45, 0.94]
        }}
      >
        <ChevronLeft size={24} />
      </motion.button>
      
      <motion.button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-[#8a584c]/80 backdrop-blur-sm text-[#f5eacf] hover:bg-[#8a584c] shadow-lg"
        aria-label="Next products"
        whileHover={{ scale: 1.1, backgroundColor: '#8a584c' }}
        whileTap={{ scale: 0.95 }}
        transition={{ 
          duration: 0.2,
          ease: [0.25, 0.46, 0.45, 0.94]
        }}
      >
        <ChevronRight size={24} />
      </motion.button>

      {/* Dots Indicator */}
      <div className="flex justify-center mt-6 space-x-2">
        {Array.from({ length: totalProducts - visibleProducts + 1 }).map((_, index) => (
          <motion.button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              currentIndex === index 
                ? 'bg-[#8a584c]' 
                : 'bg-[#ceb793]/50 hover:bg-[#ceb793]'
            }`}
            variants={dotsVariants}
            initial="initial"
            animate={currentIndex === index ? 'animate' : 'initial'}
            whileHover="hover"
            whileTap={{ scale: 0.9 }}
            transition={{ 
              duration: 0.2,
              ease: [0.25, 0.46, 0.45, 0.94]
            }}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Progress Bar */}
      <div className="mt-4 h-1 bg-[#e8d5b5]/30 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-[#8a584c] rounded-full"
          initial={{ width: 0 }}
          animate={{ 
            width: `${((currentIndex + 1) / (totalProducts - visibleProducts + 1)) * 100}%` 
          }}
          transition={{ 
            duration: 0.8,
            ease: [0.25, 0.46, 0.45, 0.94]
          }}
        />
      </div>
    </div>
  );
};

export default ProductCarousel;
