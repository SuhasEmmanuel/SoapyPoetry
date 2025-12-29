'use client';

import AnimatedContent from '@/components/AnimatedContent';

const StorySection = () => {
  return (
    <section
      id="story"
      className="relative flex items-center justify-center overflow-hidden py-16 sm:py-20 px-6"
      style={{
        background: 'linear-gradient(135deg, #ffffff 0%, #fefaf5 30%, #fdf7f0 60%, #fcf4ea 100%)'
      }}
    >
      <div className="relative z-10 max-w-5xl mx-auto">
        <div 
          className="relative bg-gradient-to-br from-[#fef9f3] via-[#fdf7f0] to-[#fcf4ea] rounded-2xl p-8 sm:p-12 md:p-16 shadow-lg border border-[#e8d5b5]/30 transition-all duration-500 ease-out hover:shadow-2xl hover:shadow-[#8a584c]/10 hover:scale-[1.02] hover:border-[#ceb793]/50"
          style={{
            boxShadow: '0 10px 40px rgba(138, 88, 76, 0.08), 0 0 0 1px rgba(206, 183, 147, 0.1)'
          }}
        >
          <div className="text-center mb-8">
            <AnimatedContent distance={40} duration={0.9} delay={0.1}>
              <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-[#8a584c] leading-tight">
                Our Story
              </h2>
            </AnimatedContent>
          </div>

          <div className="space-y-6">
            <div className="max-w-5xl mx-auto">
              <AnimatedContent distance={30} duration={0.9} delay={0.25}>
                <p className="font-display font-normal text-xl sm:text-2xl text-[#5a4438] leading-relaxed">
                  As a mother of two, my children's well-being has always been my greatest masterpiece. For years, our daily ritual involved a homemade herbal bath powder, hand-milled with love. But two years ago, life took an unexpected turn. A knee fracture left me bedridden, and for the first time, I couldn't prepare our traditional blends.
                </p>
              </AnimatedContent>
            </div>

            <div className="max-w-5xl mx-auto">
              <AnimatedContent distance={30} duration={0.9} delay={0.35}>
                <p className="font-display font-normal text-xl sm:text-2xl text-[#5a4438] leading-relaxed">
                  We turned to store-bought soaps, but the results were heartbreaking. Their sensitive skin became dry, itchy, and irritated. It was a wake-up call: I realized I needed a solution that offered the purity of my herbal powders with the convenience of a soap bar. That spark of necessity grew into Soapy Poetry. I set out to craft 100% natural, chemical-free cleansers that do more than just wash—they nourish. Today, my mission extends beyond my own home. I want our community to experience the poetry of nature, one skin-loving bar at a time.
                </p>
              </AnimatedContent>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;

