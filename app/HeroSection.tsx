'use client';

import { useEffect, useState } from 'react';
import AnimatedContent from '@/components/AnimatedContent';
import BlurText from '@/components/BlurText';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const frame = requestAnimationFrame(() => setIsVisible(true));
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-[70vh] flex items-start justify-center overflow-hidden pt-16 sm:pt-20"
      style={{
        background: 'linear-gradient(135deg, #ffffff 0%, #fefaf5 30%, #fdf7f0 60%, #fcf4ea 100%)'
      }}
    >
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        style={{ zIndex: 0, objectFit: 'cover' }}
      >
        <source src="/banner_image2.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>


      {/* Decorative gradients overlay */}
      <div
        className="absolute inset-0"
        style={{
          zIndex: 2,
          backgroundImage: `
            radial-gradient(circle at 75% 20%, rgba(206, 183, 147, 0.05) 0%, transparent 40%),
            radial-gradient(circle at 15% 65%, rgba(206, 183, 147, 0.03) 0%, transparent 45%)
          `
        }}
      />

      <div className="relative z-10 w-full h-full flex flex-col items-center justify-between px-6">
        <div className="max-w-3xl mx-auto text-center flex flex-col items-center pt-4 sm:pt-8">
          <div
            className={`relative transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <AnimatedContent distance={40} duration={0.9} delay={0.1}>
              <BlurText
                as="h1"
                text="Soapy Poetry"
                className="font-display font-black text-4xl sm:text-5xl text-[#8a584c] leading-tight flex justify-center text-center"
                spanClassName="font-display font-black text-[#8a584c]"
                delay={140}
                style={{ 
                  textShadow: '0 4px 12px rgba(253, 246, 237, 1), 0 6px 20px rgba(253, 246, 237, 0.8), 0 2px 8px rgba(138, 88, 76, 0.4)',
                  filter: 'drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1))'
                }}
              />
            </AnimatedContent>

            <AnimatedContent distance={35} duration={0.9} delay={0.25}>
              <BlurText
                as="p"
                text="Pure Handcrafted Soaps"
                className="font-display font-normal text-xl sm:text-2xl text-[#6b4a3d] mt-3 flex justify-center text-center"
                spanClassName="font-display font-normal text-[#6b4a3d]"
                delay={160}
                style={{ 
                  textShadow: '0 3px 10px rgba(253, 246, 237, 0.95), 0 4px 16px rgba(253, 246, 237, 0.7), 0 2px 6px rgba(107, 74, 61, 0.3)',
                  filter: 'drop-shadow(0 1px 3px rgba(0, 0, 0, 0.1))'
                }}
              />
            </AnimatedContent>
            <AnimatedContent distance={30} duration={0.9} delay={0.35}>
              <p 
                className="font-display font-normal mt-3 text-xl sm:text-2xl text-[#5a4438] leading-relaxed text-center w-full bg-white/60 backdrop-blur-sm rounded-lg p-4"
              >
              Experience the pure touch of nature with soaps thoughtfully handcrafted from premium natural ingredients. Each bar is made with care, combining traditional methods and mindful craftsmanship to bring gentle nourishment to your skin while staying kind to the earth.
              </p>
            </AnimatedContent>
          </div>
        </div>
              
        <AnimatedContent distance={25} duration={0.8} delay={0.45}>
          <div className="mt-16 sm:mt-20 pb-4 sm:pb-6 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="font-display font-normal rounded-full px-12 py-2.5 bg-[#8a584c] text-[#f5eacf] text-lg transition-all hover:bg-[#74493f] hover:shadow-[0_20px_35px_-20px_rgba(138,88,76,0.65)]">
              Explore Collection
            </button>
            <button className="learn-more-btn rounded-full px-12 py-2.5 text-lg border-2 border-[#8a584c] bg-transparent overflow-hidden">
              <span className="learn-more-hover-circle" />
              <span className="learn-more-label-stack">
                <span className="learn-more-label">Learn More</span>
                <span className="learn-more-label-hover">Learn More</span>
              </span>
            </button>
          </div>
        </AnimatedContent>
      </div>
    </section>
  );
};

export default HeroSection;
