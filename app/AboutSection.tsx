'use client';

import AnimatedContent from '@/components/AnimatedContent';

const AboutSection = () => {
  return (
    <section
      id="about"
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
            <AnimatedContent distance={30} duration={0.8} delay={0.1}>
              <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-[#8a584c] leading-tight">
                About Us
              </h2>
            </AnimatedContent>
          </div>

          <div className="max-w-5xl mx-auto">
            <AnimatedContent distance={30} duration={0.9} delay={0.25}>
              <p className="font-display font-normal text-xl sm:text-2xl text-[#5a4438] leading-relaxed">
                At Soapy Poetry, we celebrate handcrafted beauty, creating each bar with care using traditional methods and pure natural ingredients. Our mission is simple: to craft skin-nourishing soaps that honor you and the earth, made with the finest organic ingredients and free from harsh chemicals. Every bar reflects mindful craftsmanship and sustainable values—gentle on your skin, kind to the planet.
              </p>
            </AnimatedContent>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

