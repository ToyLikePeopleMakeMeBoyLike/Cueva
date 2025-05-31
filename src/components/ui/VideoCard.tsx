// src/components/ui/VideoCard.tsx
'use client';

import { VideoType } from '../../lib/types';
// import { getFadeLeftAnimation } from '@/styles/animations'; // To be created later
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { FiPlayCircle, FiClock, FiTag } from 'react-icons/fi'; // Assuming react-icons dependency

// Placeholder for getFadeLeftAnimation
const getFadeLeftAnimation = { initial: { opacity: 0, x: -20 }, animate: { opacity: 1, x: 0 }, transition: { duration: 0.5 } };

const VideoCard = ({
  id,
  name,
  description,
  img,
  genre,
  duration,
  url,
  tags,
}: VideoType) => { // Using global VideoType
  return (
    <motion.div
      {...getFadeLeftAnimation}
      className="group relative flex h-full flex-col overflow-hidden rounded-xl border border-transparent-white bg-background-secondary shadow-lg transition-all duration-300 hover:shadow-xl hover:border-accent/50"
      // Assumes Tailwind color variables like border-transparent-white, bg-background-secondary, hover:border-accent/50 are defined
    >
      <Link href={url} aria-label={`Watch ${name}`} className="block">
        <div className="relative aspect-video w-full"> {/* aspect-video for 16:9 ratio */}
          <Image
            src={img} // Placeholder like '/images/thumbnails/default.jpg'
            alt={name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" // Responsive image sizes
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <FiPlayCircle className="h-16 w-16 text-white/80" />
          </div>
        </div>
      </Link>

      <div className="flex flex-grow flex-col p-5">
        <Link href={url} aria-label={`Watch ${name}`} className="block">
          <h3 className="mb-2 text-xl font-semibold text-text-primary transition-colors duration-300 group-hover:text-accent">
            {/* Assumes text-text-primary, group-hover:text-accent defined */}
            {name}
          </h3>
        </Link>
        <p className="mb-4 flex-grow text-sm text-text-secondary line-clamp-3">
          {/* Assumes text-text-secondary defined */}
          {description}
        </p>

        <div className="mt-auto space-y-2 text-xs text-text-tertiary"> {/* Assumes text-text-tertiary defined */}
          {duration && (
            <div className="flex items-center gap-1.5">
              <FiClock className="h-3.5 w-3.5 text-accent" /> {/* Assumes text-accent defined */}
              <span>{duration}</span>
            </div>
          )}
          {genre && genre.length > 0 && (
            <div className="flex flex-wrap items-center gap-1.5">
              <FiTag className="h-3.5 w-3.5 text-accent" />
              {genre.map((g, index) => (
                <span key={index} className="rounded bg-background-primary px-1.5 py-0.5"> {/* Assumes bg-background-primary defined */}
                  {g}
                </span>
              ))}
            </div>
          )}
          {/* Optional: Display tags if needed
          {tags && tags.length > 0 && (
            <div className="flex flex-wrap items-center gap-1.5 pt-1">
              {tags.map((tag, index) => (
                <span key={index} className="text-xs bg-gray-700 px-1.5 py-0.5 rounded">
                  #{tag}
                </span>
              ))}
            </div>
          )}
          */}
        </div>
      </div>
    </motion.div>
  );
};

export default VideoCard;
