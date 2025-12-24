import Image from "next/image";
import React from "react";
import ClickSpark from "@/components/ClickSpark";
import PillNav from "./widgets/PillNav";
import HeroSection from "./HeroSection";
import AboutSection from "./AboutSection";
import StorySection from "./StorySection";
import ProductsSection from "./ProductsSection";
import IngredientsSection from "./IngredientsSection";
import EarthSection from "./EarthSection";
import TestimonialsSection from "./TestimonialsSection";
import ContactSection from "./ContactSection";
import FooterSection from "./FooterSection";

export default function Home() {
  return (
    <ClickSpark
      sparkColor="#8a584c"
      sparkSize={12}
      sparkRadius={20}
      sparkCount={10}
      duration={500}
      easing="ease-out"
      extraScale={1.2}
    >
      <main>
        <PillNav ></PillNav>
        <HeroSection />
        <AboutSection />
        <ProductsSection />
        <IngredientsSection />
        <EarthSection />
        <StorySection />
        <TestimonialsSection />
        <ContactSection />
        <FooterSection />
      </main>
    </ClickSpark>
  );
}
