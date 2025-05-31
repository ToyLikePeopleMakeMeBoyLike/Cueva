// src/lib/content/featured-videos.ts
import { FeaturedVideosSectionType } from '@/lib/types/sections';

// Content for the featured videos section.
export const featuredVideosSection: FeaturedVideosSectionType = {
  title: 'Trending Now',
  videos: [
    {
      id: '1',
      name: 'Mastering Figma: A Beginner’s Guide',
      description:
        'Learn the fundamentals of Figma, from basic tools to creating your first interactive prototype. Perfect for new designers.',
      img: '/images/thumbnails/figma-masterclass.jpg', // Replace with actual thumbnail path
      genre: ['UI Design', 'Tutorial', 'Figma'],
      duration: '2h 15m',
      url: '/watch/figma-masterclass-1', // Link to the video player page
      tags: ['figma', 'ui design', 'beginner tutorial', 'prototyping'],
      // bunnyNetEmbedUrl: 'YOUR_BUNNY.NET_EMBED_URL_HERE' // This would come from backend
    },
    {
      id: '2',
      name: 'UX Research Deep Dive: User Interviews',
      description:
        'Explore advanced techniques for conducting effective user interviews and gathering actionable insights for your projects.',
      img: '/images/thumbnails/ux-research-interviews.jpg', // Replace with actual thumbnail path
      genre: ['UX Research', 'Interviews'],
      duration: '1h 45m',
      url: '/watch/ux-research-interviews-1',
      tags: ['ux research', 'user interviews', 'qualitative research'],
    },
    {
      id: '3',
      name: 'Building a Design System from Scratch',
      description:
        'A step-by-step guide to creating a cohesive and scalable design system for your web and mobile applications.',
      img: '/images/thumbnails/design-system.jpg', // Replace with actual thumbnail path
      genre: ['Design Systems', 'UI Design', 'Development'],
      duration: '3h 05m',
      url: '/watch/design-system-scratch-1',
      tags: ['design system', 'component library', 'ui engineering'],
    },
    // Add more video objects here
  ],
};
