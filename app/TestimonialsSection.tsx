'use client';

import AnimatedContent from '@/components/AnimatedContent';

const TestimonialsSection = () => {

  const testimonials = [
    {
      name: 'Chandra Shekhar',
      location: '',
      text: "I have been using these soaps for over an year...my itchy and dry skin now became supple and glowy...heard their story how a couple passionate about getting rid of hazardous chemicals in their kids lives started their journey with these soaps....home made, eco-friendly and residue free...thanx a tonne for initiative for sustainability and helping people like us in the process...."
    },
    {
      name: 'Michael Chen',
      location: 'Seattle, WA',
      text: 'The quality is outstanding. You can really tell these are made with care and attention. The Milk And Manjishtha soap has become my absolute favorite.'
    },
    {
      name: 'Emily Rodriguez',
      location: 'San Francisco, CA',
      text: "As someone with sensitive skin, I was hesitant to try new products. But these soaps are so gentle and effective. I'm a customer for life!"
    },
    {
      name: 'David Thompson',
      location: 'Austin, TX',
      text: 'The packaging is beautiful, the scents are amazing, and most importantly, my skin has never felt better. Highly recommend to everyone!'
    }
  ];

  return (
    <section
      id="testimonials"
      className="relative flex items-center justify-center overflow-hidden py-12 sm:py-16 px-6"
      style={{
        background: 'linear-gradient(135deg, #ffffff 0%, #fefaf5 30%, #fdf7f0 60%, #fcf4ea 100%)'
      }}
    >
      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <AnimatedContent distance={40} duration={0.9} delay={0.1}>
            <h2 className="font-display font-black text-2xl sm:text-3xl text-[#8a584c] leading-tight">
              What Our Customers Say
            </h2>
          </AnimatedContent>
        </div>

        <div className="max-w-3xl mx-auto mb-6">
          <AnimatedContent distance={30} duration={0.9} delay={0.25}>
            <p className="font-display font-normal text-base sm:text-xl text-[#5a4438] text-center leading-relaxed">
              We're honored to share the experiences of our customers who have made Soapy Poetry a part of their daily self-care routine.
            </p>
          </AnimatedContent>
        </div>

        {/* Mobile grid - show 4 cards at once */}
        <div className="md:hidden grid grid-cols-2 gap-3">
          {testimonials.slice(0, 4).map((testimonial, index) => (
            <AnimatedContent key={index} className="flex-none" distance={25} duration={0.9} delay={0.35 + (index * 0.1)}>
              <div className="bg-[#f5eacf] rounded-lg p-2.5 border border-[#ceb793]">
                <div className="mb-3">
                  <div className="flex items-center gap-2 text-[#8a584c] mb-2">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                    ))}
                  </div>
                  <p className="font-display font-normal text-xs text-[#5a4438] leading-tight italic">
                    "{testimonial.text}"
                  </p>
                </div>
                <div className="mt-3 pt-3 border-t border-[#8a584c]">
                  <p className="font-display font-semibold text-xs text-[#8a584c]">
                    {testimonial.name}
                  </p>
                  <p className="font-display font-normal text-xs text-[#6b4a3d]">
                    {testimonial.location}
                  </p>
                </div>
              </div>
            </AnimatedContent>
          ))}
        </div>

        {/* Desktop grid */}
        <div className="hidden md:grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <AnimatedContent key={index} distance={25} duration={0.9} delay={0.35 + (index * 0.1)}>
              <div className="bg-[#f5eacf] rounded-lg p-4 border border-[#ceb793]">
                <div className="mb-3">
                  <div className="flex items-center gap-2 text-[#8a584c] mb-2">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-4 h-4 fill-current"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                    ))}
                  </div>
                  <p className="font-display font-normal text-sm sm:text-base text-[#5a4438] leading-relaxed italic">
                    "{testimonial.text}"
                  </p>
                </div>
                <div className="mt-3 pt-3 border-t border-[#8a584c]">
                  <p className="font-display font-semibold text-sm sm:text-base text-[#8a584c]">
                    {testimonial.name}
                  </p>
                  <p className="font-display font-normal text-xs sm:text-sm text-[#6b4a3d]">
                    {testimonial.location}
                  </p>
                </div>
              </div>
            </AnimatedContent>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

