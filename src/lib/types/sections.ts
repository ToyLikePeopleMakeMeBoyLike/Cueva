// src/lib/types/sections.ts

// Basic Video Type
export type VideoType = {
  id: string;
  name: string;
  description: string;
  img: string; // Thumbnail URL
  genre: string[]; // Can be an array of strings or IDs linking to a GenreType
  duration: string;
  url: string; // Frontend URL to the watch page e.g. /watch/[videoId]
  bunnyNetEmbedUrl?: string; // Direct embed URL from Bunny.net (fetched from backend)
  tags?: string[];
  releaseDate?: string; // Or Date object
  seriesId?: string;
  seasonNumber?: number;
  episodeNumber?: number;
  // Add other fields like director, cast, ratings if needed
};

// Series Type
export type SeriesType = {
  id: string;
  title: string;
  description: string;
  thumbnailUrl: string;
  genres: string[];
  releaseYear?: number;
  seasons?: SeasonType[]; // Array of seasons in this series
};

// Season Type
export type SeasonType = {
  id: string;
  seriesId: string;
  seasonNumber: number;
  title?: string;
  description?: string;
  episodes: VideoType[]; // Array of episodes (VideoType) in this season
  releaseDate?: string;
};

// Section Type for Featured Videos
export type FeaturedVideosSectionType = {
  title: string;
  videos: VideoType[];
};

// Navigation Link Type
export type NavLinkType = {
  label: string;
  url: string;
  ariaLabel: string;
  openInNewTab?: boolean;
  authRequired?: boolean; // Optional: if some links require authentication
};

// Navbar Section Type
export type NavbarSectionType = {
  platformName?: string;
  navLinks: NavLinkType[];
  cta?: NavLinkType & { icon?: string };
};

// Hero Section Type
export type HeroSectionType = {
  subtitle?: string;
  title: string;
  tagline?: string;
  description?: string;
  specialText?: string;
  image?: { src: string; alt: string };
  cta?: NavLinkType;
};

// Footer Link Type
export type FooterLinkType = {
  label: string;
  url: string;
  ariaLabel?: string;
};

// Social Link Type (extends FooterLinkType)
export type SocialLinkType = FooterLinkType & { icon: string };

// Footer Section Type
export type FooterSectionType = {
  title?: string;
  links?: FooterLinkType[];
  socials?: SocialLinkType[];
  bottomText?: string;
};

// Platform Configuration Type
export type PlatformConfig = {
  name: string;
  description: string;
  url: string;
  image: string; // Typically a path to a large representative image for embeds
  favicon: string; // Path to favicon.ico
  author: {
    name: string;
    url: string;
    email: string;
  };
  keywords: string; // Comma-separated string of keywords
  language: string; // e.g., 'en-US'
};

// Remove or comment out unused portfolio-specific types like:
// - ProjectType (if distinct from VideoType and not used)
// - ExperienceType
// - SoftwareSkillType
// - Etc.
// (Since we are creating from scratch, we just don't add them)
