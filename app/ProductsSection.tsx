'use client';

import { useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';
import { gsap } from 'gsap';
import TiltedCard from '@/components/TiltedCard';
import AnimatedContent from '@/components/AnimatedContent';
import './ProductsMasonry.css';

const useMedia = (queries: string[], values: number[], defaultValue: number): number => {
  const get = () => {
    if (typeof window === 'undefined') return defaultValue;
    const index = queries.findIndex(q => window.matchMedia(q).matches);
    return values[index] ?? defaultValue;
  };
  const [value, setValue] = useState(get);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const handler = () => setValue(get);
    queries.forEach(q => {
      const mediaQuery = window.matchMedia(q);
      mediaQuery.addEventListener('change', handler);
    });
    return () => {
      queries.forEach(q => {
        const mediaQuery = window.matchMedia(q);
        mediaQuery.removeEventListener('change', handler);
      });
    };
  }, [queries]);

  return value;
};

const useMeasure = (): [React.RefObject<HTMLDivElement | null>, { width: number; height: number }] => {
  const ref = useRef<HTMLDivElement>(null);
  const [size, setSize] = useState<{ width: number; height: number }>({ width: 0, height: 0 });

  useLayoutEffect(() => {
    if (!ref.current) return;
    const ro = new ResizeObserver(([entry]) => {
      const { width, height } = entry.contentRect;
      setSize({ width, height });
    });
    ro.observe(ref.current);
    return () => ro.disconnect();
  }, []);

  return [ref, size];
};

const preloadImages = async (urls: string[]): Promise<void> => {
  await Promise.all(
    urls.map(
      (src: string) =>
        new Promise<void>(resolve => {
          const img = new Image();
          img.src = src;
          img.onload = img.onerror = () => resolve();
        })
    )
  );
};

const ProductsSection = () => {
  const products = [
    {
      id: 1,
      name: 'Lavender Dream',
      description: 'A calming blend of lavender essential oil and shea butter for a peaceful bathing experience.',
      price: '$12.99',
      img: 'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=400&h=500&fit=crop&q=80',
      height: 500
    },
    {
      id: 2,
      name: 'Honey Oat',
      description: 'Gentle exfoliation with the natural sweetness of honey and the soothing properties of oatmeal.',
      price: '$11.99',
      img: 'https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=400&h=600&fit=crop&q=80',
      height: 600
    },
    {
      id: 3,
      name: 'Citrus Burst',
      description: 'Energizing combination of lemon, orange, and grapefruit essential oils for a refreshing start to your day.',
      price: '$12.99',
      img: 'https://images.unsplash.com/photo-1612817288484-6f916006741a?w=400&h=450&fit=crop&q=80',
      height: 450
    },
    {
      id: 4,
      name: 'Rose Petal',
      description: 'Luxurious rose-infused soap with moisturizing properties for soft, radiant skin.',
      price: '$13.99',
      img: 'https://images.unsplash.com/photo-1600857062242-afd87e8b1e0e?w=400&h=550&fit=crop&q=80',
      height: 550
    },
    {
      id: 5,
      name: 'Eucalyptus Mint',
      description: 'Invigorating blend that clears the mind and refreshes the body with cooling mint and eucalyptus.',
      price: '$12.99',
      img: 'https://images.unsplash.com/photo-1556229010-6c3f2c9ca5f8?w=400&h=500&fit=crop&q=80',
      height: 500
    },
    {
      id: 6,
      name: 'Vanilla Bean',
      description: 'Warm and comforting, enriched with vanilla extract and cocoa butter for ultimate hydration.',
      price: '$13.99',
      img: 'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=400&h=600&fit=crop&q=80',
      height: 600
    },
    {
      id: 7,
      name: 'Handmade Soap',
      description: 'Artisan crafted soap bars.',
      price: '$12.99',
      img: 'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=400&h=500&fit=crop&q=80',
      height: 500
    },
    {
      id: 8,
      name: 'Natural Soap',
      description: 'Pure natural ingredients.',
      price: '$11.99',
      img: 'https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=400&h=600&fit=crop&q=80',
      height: 600
    }
  ];

  const columns = useMedia(
    ['(min-width:1500px)', '(min-width:1000px)', '(min-width:600px)', '(min-width:400px)'],
    [4, 3, 2, 2],
    1
  );

  const [containerRef, { width }] = useMeasure();
  const [imagesReady, setImagesReady] = useState(false);

  useEffect(() => {
    const imageUrls = products.map(p => p.img);
    preloadImages(imageUrls).then(() => setImagesReady(true));
  }, []);

  const grid = useMemo(() => {
    if (!width || !imagesReady) return [];

    const colHeights = new Array(columns).fill(0);
    const columnWidth = width / columns;
    const gap = 12;

    return products.map(product => {
      const col = colHeights.indexOf(Math.min(...colHeights));
      const x = columnWidth * col;
      const height = product.height / 2;
      const y = colHeights[col];

      colHeights[col] += height + gap;

      return { ...product, x, y, w: columnWidth - gap, h: height };
    });
  }, [columns, width, imagesReady]);

  const hasMounted = useRef(false);

  useLayoutEffect(() => {
    if (!imagesReady) return;

    grid.forEach((item, index) => {
      const selector = `[data-key="${item.id}"]`;
      const animationProps = {
        x: item.x,
        y: item.y,
        width: item.w,
        height: item.h
      };

      if (!hasMounted.current) {
        const initialState = {
          opacity: 0,
          x: item.x,
          y: item.y + 100,
          width: item.w,
          height: item.h,
          filter: 'blur(10px)'
        };

        gsap.fromTo(selector, initialState, {
          opacity: 1,
          ...animationProps,
          filter: 'blur(0px)',
          duration: 0.8,
          ease: 'power3.out',
          delay: index * 0.1
        });
      } else {
        gsap.to(selector, {
          ...animationProps,
          duration: 0.6,
          ease: 'power3.out',
          overwrite: 'auto'
        });
      }
    });

    hasMounted.current = true;
  }, [grid, imagesReady]);

  return (
    <section
      id="products"
      className="relative flex items-center justify-center overflow-hidden py-12 sm:py-16 px-6"
      style={{
        background: 'linear-gradient(135deg, #ffffff 0%, #fefaf5 30%, #fdf7f0 60%, #fcf4ea 100%)'
      }}
    >
      <div className="relative z-10 max-w-6xl mx-auto w-full">
        <div className="text-center mb-8">
          <AnimatedContent distance={30} duration={0.8} delay={0.1}>
            <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-[#8a584c] leading-tight">
              Our Collection
            </h2>
          </AnimatedContent>
        </div>

        <div ref={containerRef} className="products-masonry-list" style={{ minHeight: '800px' }}>
          {grid.map(item => (
            <div
              key={item.id}
              data-key={item.id}
              className="products-masonry-item"
            >
              <TiltedCard
                imageSrc={item.img}
                altText={item.name}
                captionText=""
                containerHeight="100%"
                containerWidth="100%"
                imageHeight="100%"
                imageWidth="100%"
                scaleOnHover={1.05}
                rotateAmplitude={10}
                showMobileWarning={false}
                showTooltip={false}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;

