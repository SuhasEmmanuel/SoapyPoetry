"use client";

import PillNav from '../../components/PillNav';
import React from 'react';

// Use a public path for the logo. Put your image at `public/logo.svg` and
// reference it as the string below. This avoids bundler errors when the
// original placeholder path doesn't exist.
const logo = '/logoonly.png';


export default function PillNavWidget() {
  return (
    <PillNav
      logo={logo}
      logoAlt="Company Logo"
      items={[
        { label: 'Home', href: '/' },
        { label: 'About', href: '/about' },
        { label: 'Products', href: '/products' },
        { label: 'Benifits', href: '/benifits' }
      ]}
      activeHref="/"
      className="custom-nav"
      ease="power2.easeOut"
      baseColor="#8a584c"
      pillColor="#ceb793"
      hoveredPillTextColor="#f5eacf"
      pillTextColor="#3f2d26"
      onMobileMenuClick={() => {}}
    />
  );
}