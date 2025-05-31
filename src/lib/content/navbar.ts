// src/lib/content/navbar.ts
import { NavbarSectionType } from '../types';

export const navbarSection: NavbarSectionType = {
  platformName: 'StreamUX', // Same as in platform.ts or your chosen name
  navLinks: [
    {
      label: 'Home',
      url: '/',
      ariaLabel: 'Navigate to home page',
    },
    {
      label: 'Browse',
      url: '/browse', // You'll need to create this page
      ariaLabel: 'Browse all videos and series',
    },
    {
      label: 'Categories',
      url: '/categories', // You'll need to create this page
      ariaLabel: 'Browse content by categories',
    },
    {
      label: 'Series',
      url: '/series', // You'll need to create this page for TV shows/series
      ariaLabel: 'Browse all series',
    },
    {
      label: 'My List',
      url: '/my-list', // For logged-in users, you'll need to create this page
      ariaLabel: 'View your saved videos and series',
      authRequired: true, // Example: if you implement authentication
    },
  ],
  cta: { // Optional: Can be for Sign Up / Log In
    label: 'Sign Up',
    url: '/signup',
    ariaLabel: 'Sign up for StreamUX',
    openInNewTab: false,
  },
};
