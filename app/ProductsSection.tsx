'use client';

import ProductCarousel from '@/components/ProductCarousel';
import AnimatedContent from '@/components/AnimatedContent';

const ProductsSection = () => {
  const products = [
    {
      id: 1,
      name: 'Milk And Manjishtha soap',
      img: '/soap1v2.jpg'
    },
    {
      id: 2,
      name: 'Milk soap',
      img: '/soap2..jpg'
    },
    {
      id: 3,
      name: 'Milk And Manjishtha soap',
      img: '/soap3.jpg'
    },
    {
      id: 4,
      name: 'Coffee soap',
      img: '/soap4JPG.jpg'
    },
    {
      id: 5,
      name: 'Mint soap',
      img: '/soap5.jpg'
    },
    {
      id: 6,
      name: 'Chamomile soap',
      img: '/soap6v2.jpg'
    },
    {
      id: 7,
      name: 'rose soap',
      img: '/soap7.jpg'
    }
  ];

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
            <h2 className="font-display font-black text-2xl sm:text-3xl text-[#8a584c] leading-tight">
              Our Collection
            </h2>
          </AnimatedContent>
        </div>

        <AnimatedContent distance={40} duration={0.9} delay={0.2}>
          <div className="mb-6">
            <p className="font-display font-normal text-lg sm:text-xl text-[#6b4a3d] text-center leading-relaxed max-w-3xl mx-auto">
              Discover our handcrafted collection of natural soaps, each made with premium ingredients and essential oils to nourish your skin.
            </p>
          </div>
        </AnimatedContent>

        <AnimatedContent distance={30} duration={0.8} delay={0.3}>
          <ProductCarousel products={products} />
        </AnimatedContent>
      </div>
    </section>
  );
};

export default ProductsSection;

