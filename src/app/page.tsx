"use client";

import {AboutMeSection} from '@/components/AboutMeSection';
import {HeroSection} from '@/components/HeroSection';
import {Navbar} from '@/components/Navbar';
import {ProjectsSection} from '@/components/ProjectsSection';
import {Stack} from '@/components/ui/stack';

export default function Home() {
  return (
    <Stack className="w-full">
      <Navbar />
      <HeroSection />
      <ProjectsSection />
      <AboutMeSection />
    </Stack>
  );
}
