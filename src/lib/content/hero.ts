// src/lib/content/hero.ts
import { HeroSectionType } from '@/lib/types/sections';

// Content for the hero section.
export const heroSection: HeroSectionType = {
  subtitle: 'Welcome to StreamUX',
  title: 'Discover Inspiring UI/UX Content.',
  tagline: 'Stream tutorials, case studies, and expert talks to elevate your design skills.',
  description:
    "Dive into a curated collection of videos from leading UI/UX professionals. Whether you're a beginner or a seasoned designer, find content that fuels your creativity and expertise.",
  specialText: 'Now Streaming: The Future of Interaction Design!', // Or a featured video/series
  cta: {
    label: 'Start Watching',
    url: '/browse', // Link to your main content Browse page
    ariaLabel: 'Start watching UI/UX videos',
  },
  image: { // Optional: if you want a background image or illustration for hero
    src: '/images/hero-banner.jpg', // Replace with an actual image path
    alt: 'StreamUX Hero Banner',
  }
};
