import { Footer } from "@/components/layout/footer";

import { Navbar } from "@/components/layout/navbar";

import { AboutSection } from "@/components/sections/about";

import { ContactSection } from "@/components/sections/contact";

import { FAQSection } from "@/components/sections/faq";

import { HeroSection } from "@/components/sections/hero";

import { MethodSection } from "@/components/sections/method";

import { ResultsSection } from "@/components/sections/results";

import { TestimonialsSection } from "@/components/sections/testimonials";
import { FloatingWhatsApp } from "@/components/shared/floatingwhatsapp";

export default function HomePage() {
  return (
    <>
      <Navbar />

      <main>
        <HeroSection />

        <AboutSection />

        <ResultsSection />

        <MethodSection />

        <TestimonialsSection />

        <FAQSection />

        <ContactSection />
      </main>

      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
