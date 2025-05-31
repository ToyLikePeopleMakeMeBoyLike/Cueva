// src/lib/content/platform.ts
import { PlatformConfig } from '../types';

// Array of keywords for SEO.
const keywords = [
  'UI/UX',
  'Design Streaming',
  'Video Platform',
  'Learn UI',
  'Learn UX',
  'Design Tutorials',
  'Case Studies',
  'Web Design',
  'App Design',
];

// Configuration for the platform.
export const platform: PlatformConfig = {
  name: 'StreamUX', // Choose your platform name
  description:
    'Your ultimate destination for UI/UX design video tutorials, case studies, and insights. Stream content from top designers and enhance your skills.',
  url: 'https://your-streaming-platform-url.com', // Replace with your actual URL
  image: '/favicons/favicon-512x512.png', // Or a relevant platform logo/banner
  favicon: '/favicons/favicon.ico',
  author: {
    name: 'StreamUX Team', // Or your name/organization
    url: 'https://your-streaming-platform-url.com',
    email: 'contact@your-streaming-platform-url.com',
  },
  keywords: keywords.join(', '),
  language: 'en-US', // Or your target language
};

// SEO data for the platform.
export const seoData = {
  title: `${platform.name} | UI/UX Design Streaming`,
  description: platform.description,
  image: platform.image,
  url: platform.url,
  author: platform.author.name,
  keywords: platform.keywords,
  language: platform.language,
};
