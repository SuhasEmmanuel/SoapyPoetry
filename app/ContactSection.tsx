'use client';

import AnimatedContent from '@/components/AnimatedContent';

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="relative flex items-center justify-center overflow-hidden py-12 sm:py-16 px-6"
      style={{
        background: 'linear-gradient(135deg, #ffffff 0%, #fefaf5 30%, #fdf7f0 60%, #fcf4ea 100%)'
      }}
    >
      <div className="relative z-10 max-w-4xl mx-auto w-full">
        <div className="text-center mb-8">
          <AnimatedContent distance={40} duration={0.9} delay={0.1}>
            <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-[#8a584c] leading-tight">
              Get In Touch
            </h2>
          </AnimatedContent>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <AnimatedContent distance={30} duration={0.9} delay={0.25}>
              <p className="font-display font-normal text-xl sm:text-2xl text-[#5a4438] mb-6 leading-relaxed">
                We'd love to hear from you! Whether you have questions about our products, need help choosing the perfect soap, or want to share your experience, we're here to help.
              </p>
            </AnimatedContent>

            <AnimatedContent distance={25} duration={0.9} delay={0.35}>
              <div className="space-y-4 mt-8">
              <div>
                <h3 className="font-display font-semibold text-lg sm:text-xl text-[#8a584c] mb-2">Email</h3>
                <p className="font-display font-normal text-base sm:text-lg text-[#5a4438]">hello@soapypoetry.com</p>
              </div>
              <div>
                <h3 className="font-display font-semibold text-lg sm:text-xl text-[#8a584c] mb-2">Phone</h3>
                <p className="font-display font-normal text-base sm:text-lg text-[#5a4438]">+1 (555) 123-4567</p>
              </div>
              <div>
                <h3 className="font-display font-semibold text-lg sm:text-xl text-[#8a584c] mb-2">Hours</h3>
                <p className="font-display font-normal text-base sm:text-lg text-[#5a4438]">Monday - Friday: 9am - 6pm</p>
                <p className="font-display font-normal text-base sm:text-lg text-[#5a4438]">Saturday: 10am - 4pm</p>
              </div>
              </div>
            </AnimatedContent>
          </div>

          <div>
            <AnimatedContent distance={25} duration={0.8} delay={0.45}>
              <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block font-display font-normal text-base sm:text-lg text-[#6b4a3d] mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-3 rounded-lg border-2 border-[#8a584c] bg-[#f5eacf] text-base sm:text-lg text-[#5a4438] font-display focus:outline-none focus:ring-2 focus:ring-[#8a584c]"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block font-display font-normal text-base sm:text-lg text-[#6b4a3d] mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-3 rounded-lg border-2 border-[#8a584c] bg-[#f5eacf] text-base sm:text-lg text-[#5a4438] font-display focus:outline-none focus:ring-2 focus:ring-[#8a584c]"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block font-display font-normal text-base sm:text-lg text-[#6b4a3d] mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border-2 border-[#8a584c] bg-[#f5eacf] text-base sm:text-lg text-[#5a4438] font-display focus:outline-none focus:ring-2 focus:ring-[#8a584c]"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full font-display font-normal rounded-full px-8 py-2.5 bg-[#8a584c] text-[#f5eacf] text-sm sm:text-base transition-all hover:bg-[#74493f] hover:shadow-[0_20px_35px_-20px_rgba(138,88,76,0.65)]"
              >
                Send Message
              </button>
            </form>
            </AnimatedContent>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

