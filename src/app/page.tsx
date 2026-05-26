import { AboutSection } from "@/components/sections/about";

import { Navbar } from "@/components/layout/navbar";

import { HeroSection } from "@/components/sections/hero";

export default function HomePage() {
  return (
    <>
      <Navbar />

      <main>
        <HeroSection />

        <AboutSection />
      </main>
    </>
  );
}
