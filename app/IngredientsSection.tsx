'use client';

import AnimatedContent from '@/components/AnimatedContent';
import LogoLoop from '@/components/LogoLoop';

const IngredientsSection = () => {
  const ingredients = [
    {
      name: 'Olive Oil',
      image: '/olives.png'
    },
    {
      name: 'Coconut Oil',
      image: '/coconut.png'
    },
    {
      name: 'Shea Butter',
      image: '/shae_butter.png'
    },
    {
      name: 'Honey',
      image: '/honey.png'
    },
    {
      name: 'Oatmeal',
      image: '/oat-meal.png'
    }
  ];

  return (
    <section
      id="ingredients"
      className="relative flex items-center justify-center overflow-hidden py-12 sm:py-16 px-4 sm:px-6"
      style={{
        background: 'linear-gradient(135deg, #ffffff 0%, #fefaf5 30%, #fdf7f0 60%, #fcf4ea 100%)'
      }}
    >
      <div className="relative z-10 max-w-6xl mx-auto w-full">
        <div className="text-center mb-8 px-2 sm:px-0">
          <AnimatedContent distance={40} duration={0.9} delay={0.1}>
            <h2 className="font-display font-black text-2xl sm:text-3xl text-[#8a584c] leading-tight break-words">
              Pure Ingredients
            </h2>
          </AnimatedContent>
        </div>

        <div className="max-w-3xl mx-auto mb-6 px-4 sm:px-6 w-full">
          <AnimatedContent distance={30} duration={0.9} delay={0.25}>
            <p className="font-display font-normal text-base sm:text-lg text-[#5a4438] text-center leading-relaxed break-words overflow-wrap-anywhere">
              We carefully select each ingredient for its natural benefits and quality. Every component in our soaps is chosen to provide the best care for your skin while maintaining our commitment to purity and sustainability.
            </p>
          </AnimatedContent>
        </div>

        <AnimatedContent distance={30} duration={0.9} delay={0.35}>
          <div className="mt-8 sm:mt-12 overflow-hidden">
            <LogoLoop
              logos={ingredients.map(ingredient => ({
                src: ingredient.image,
                alt: ingredient.name,
                title: ingredient.name
              }))}
              speed={80}
              direction="left"
              logoHeight={160}
              gap={80}
              pauseOnHover={true}
              scaleOnHover={true}
              renderItem={(item, key) => (
                <div className="flex flex-col items-center justify-center px-2 sm:px-4 min-w-0" key={key}>
                  <img 
                    src={item.src} 
                    alt={item.alt || item.title} 
                    className="object-contain ingredient-image"
                  />
                  <span className="mt-2 sm:mt-4 font-display font-semibold text-sm sm:text-base md:text-lg text-[#8a584c] text-center break-words overflow-wrap-anywhere max-w-full">
                    {item.title || item.alt}
                  </span>
                </div>
              )}
              className="ingredients-logo-loop logoloop--scale-hover"
              ariaLabel="Pure Ingredients"
            />
          </div>
        </AnimatedContent>
      </div>
    </section>
  );
};

export default IngredientsSection;
