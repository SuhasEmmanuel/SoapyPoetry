'use client';

import Image from 'next/image';
import AnimatedContent from '@/components/AnimatedContent';

const EarthSection = () => {
  return (
    <section
      id="earth"
      className="relative flex items-center justify-center overflow-hidden py-12 sm:py-16 px-6"
      style={{
        background: 'linear-gradient(135deg, #ffffff 0%, #fefaf5 30%, #fdf7f0 60%, #fcf4ea 100%)'
      }}
    >
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <AnimatedContent distance={40} duration={0.9} delay={0.1}>
            <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-[#8a584c] leading-tight">
              Our Earth Promise
            </h2>
          </AnimatedContent>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center mb-12">
          {/* Image Section */}
          <AnimatedContent distance={30} duration={0.9} delay={0.25}>
            <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/earth_image.png"
                alt="Sustainable skincare products from Soapy Poetry - recycled and biodegradable packaging"
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none" />
            </div>
          </AnimatedContent>

          {/* Text Content Section */}
          <div className="space-y-6">
            <AnimatedContent distance={30} duration={0.9} delay={0.35}>
              <p className="font-display font-normal text-xl sm:text-2xl text-[#5a4438] leading-relaxed">
                We are committed to protecting our planet through sustainable practices and eco-friendly choices. Every decision we make considers the impact on our environment.
              </p>
            </AnimatedContent>

            <AnimatedContent distance={30} duration={0.9} delay={0.45}>
              <p className="font-display font-normal text-xl sm:text-2xl text-[#5a4438] leading-relaxed">
                Our packaging is made from recycled and biodegradable materials. We source ingredients locally when possible, reducing our carbon footprint and supporting local communities.
              </p>
            </AnimatedContent>

            <AnimatedContent distance={30} duration={0.9} delay={0.55}>
              <p className="font-display font-normal text-xl sm:text-2xl text-[#5a4438] leading-relaxed">
                We believe that taking care of yourself and taking care of the earth go hand in hand. By choosing our products, you're making a choice that benefits both your skin and our planet.
              </p>
            </AnimatedContent>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-3 gap-8 mt-12">
          <AnimatedContent distance={25} duration={0.8} delay={0.65}>
            <div className="text-center p-6 rounded-xl bg-gradient-to-br from-[#fef9f3] to-[#fcf4ea] border border-[#e8d5b5]/30 shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="font-display font-black text-3xl sm:text-4xl text-[#8a584c] mb-2">100%</div>
              <div className="font-display font-normal text-base sm:text-lg text-[#6b4a3d]">Biodegradable</div>
            </div>
          </AnimatedContent>
          <AnimatedContent distance={25} duration={0.8} delay={0.75}>
            <div className="text-center p-6 rounded-xl bg-gradient-to-br from-[#fef9f3] to-[#fcf4ea] border border-[#e8d5b5]/30 shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="font-display font-black text-3xl sm:text-4xl text-[#8a584c] mb-2">0%</div>
              <div className="font-display font-normal text-base sm:text-lg text-[#6b4a3d]">Plastic Waste</div>
            </div>
          </AnimatedContent>
          <AnimatedContent distance={25} duration={0.8} delay={0.85}>
            <div className="text-center p-6 rounded-xl bg-gradient-to-br from-[#fef9f3] to-[#fcf4ea] border border-[#e8d5b5]/30 shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="font-display font-black text-3xl sm:text-4xl text-[#8a584c] mb-2">100%</div>
              <div className="font-display font-normal text-base sm:text-lg text-[#6b4a3d]">Natural Ingredients</div>
            </div>
          </AnimatedContent>
        </div>
      </div>
    </section>
  );
};

export default EarthSection;

