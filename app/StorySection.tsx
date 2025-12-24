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
                  Soapy Poetry began with a simple wish—to create something pure and meaningful in a world of synthetic products. Inspired by a grandmother's traditional soap-making, our founder started crafting small batches at home, blending timeless techniques with modern knowledge.
                </p>
              </AnimatedContent>
            </div>

            <div className="max-w-5xl mx-auto">
              <AnimatedContent distance={30} duration={0.9} delay={0.35}>
                <p className="font-display font-normal text-xl sm:text-2xl text-[#5a4438] leading-relaxed">
                  What began as a passion became a mission to share the beauty of natural, handcrafted soaps. Even today, every bar is made by hand with care, sustainability, and attention to detail.
                </p>
              </AnimatedContent>
            </div>

            <div className="max-w-5xl mx-auto">
              <AnimatedContent distance={30} duration={0.8} delay={0.45}>
                <p className="font-display font-normal text-xl sm:text-2xl text-[#5a4438] leading-relaxed">
                  We believe self-care should be natural and meaningful. Our soaps are more than cleansing—they're a gentle daily ritual that reconnects you with nature and with yourself.
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

