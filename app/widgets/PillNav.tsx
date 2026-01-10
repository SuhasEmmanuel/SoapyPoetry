"use client";

import PillNav from '../../components/PillNav';
import React, { MouseEvent } from 'react';

// Use a public path for the logo. Put your image at `public/logo.svg` and
// reference it as the string below. This avoids bundler errors when the
// original placeholder path doesn't exist.
const logo = '/logoonly.png';


export default function PillNavWidget() {
  const handleSmoothScroll = (e: MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <PillNav
      logo={logo}
      logoAlt="Company Logo"
      items={[
        { label: 'Home', href: '#home', onClick: (e: MouseEvent<HTMLAnchorElement>) => handleSmoothScroll(e, 'home') },
        { label: 'About', href: '#about', onClick: (e: MouseEvent<HTMLAnchorElement>) => handleSmoothScroll(e, 'about') },
        { label: 'Products', href: '#products', onClick: (e: MouseEvent<HTMLAnchorElement>) => handleSmoothScroll(e, 'products') },
        { label: 'Ingredients', href: '#ingredients', onClick: (e: MouseEvent<HTMLAnchorElement>) => handleSmoothScroll(e, 'ingredients') }
      ]}
      activeHref="#home"
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