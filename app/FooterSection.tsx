'use client';

const FooterSection = () => {
  return (
    <footer
      id="footer"
      className="relative bg-[#8a584c] text-[#f5eacf] py-12 px-6"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-display font-black text-xl mb-4">Soapy Poetry</h3>
            <p className="font-display font-normal text-xs sm:text-sm leading-relaxed">
              Pure handcrafted soaps made with love and natural ingredients.
            </p>
          </div>

          <div>
            <h4 className="font-display font-semibold text-base mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="font-display font-normal text-sm hover:underline">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="font-display font-normal text-sm hover:underline">
                  About
                </a>
              </li>
              <li>
                <a href="#products" className="font-display font-normal text-sm hover:underline">
                  Products
                </a>
              </li>
              <li>
                <a href="#story" className="font-display font-normal text-sm hover:underline">
                  Our Story
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-base mb-4">Contact</h4>
            <ul className="space-y-2">
              <li className="font-display font-normal text-xs sm:text-sm">
                hello@soapypoetry.com
              </li>
              <li className="font-display font-normal text-xs sm:text-sm">
                +1 (555) 123-4567
              </li>
              <li className="font-display font-normal text-xs sm:text-sm">
                Monday - Friday: 9am - 6pm
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-base mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <a
                href="#"
                className="font-display font-normal text-sm hover:underline"
                aria-label="Facebook"
              >
                Facebook
              </a>
              <a
                href="#"
                className="font-display font-normal text-sm hover:underline"
                aria-label="Instagram"
              >
                Instagram
              </a>
              <a
                href="#"
                className="font-display font-normal text-sm hover:underline"
                aria-label="Twitter"
              >
                Twitter
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-[#ceb793] pt-8 text-center">
          <p className="font-display font-normal text-xs sm:text-sm">
            © {new Date().getFullYear()} Soapy Poetry. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;

