'use client';

import TiltedCard from '@/components/TiltedCard';
import AnimatedContent from '@/components/AnimatedContent';

const ProductsSection = () => {
  const products = [
    {
      id: 1,
      name: 'Lavender Dream',
      img: '/soap1v2.jpg'
    },
    {
      id: 2,
      name: 'Honey Oat',
      img: '/soap2..jpg'
    },
    {
      id: 3,
      name: 'Citrus Burst',
      img: '/soap3.jpg'
    },
    {
      id: 4,
      name: 'Rose Petal',
      img: '/soap4JPG.jpg'
    },
    {
      id: 5,
      name: 'Eucalyptus Mint',
      img: '/soap5.jpg'
    },
    {
      id: 6,
      name: 'Vanilla Bean',
      img: '/soap6v2.jpg'
    },
    {
      id: 7,
      name: 'Handmade Soap',
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
            <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-[#8a584c] leading-tight">
              Our Collection
            </h2>
          </AnimatedContent>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-6">
          {products.map(product => (
            <div key={product.id} className="aspect-[3/4]">
              <TiltedCard
                imageSrc={product.img}
                altText={product.name}
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

