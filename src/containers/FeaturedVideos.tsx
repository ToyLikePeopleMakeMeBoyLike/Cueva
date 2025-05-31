// src/containers/FeaturedVideos.tsx (formerly FeaturedProjects.tsx)
'use client';

// import { VideoCard, Wrapper } from '@/components'; // VideoCard and Wrapper will be created later
import { featuredVideosSection } from '../lib/content/featured-videos';
// import { getSectionAnimation } from '@/styles/animations'; // getSectionAnimation will be created later
import { motion } from 'framer-motion';

// Placeholder for Wrapper component
const Wrapper = ({ children, ...props }: any) => <section {...props}>{children}</section>;
// Placeholder for VideoCard component
const VideoCard = ({ name, ...props }: any) => <div {...props}>VideoCard: {name}</div>; // Simple placeholder
// Placeholder for getSectionAnimation
const getSectionAnimation = { initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { duration: 0.5 } };

const FeaturedVideos = () => {
  const { title, videos } = featuredVideosSection;
  return (
    <Wrapper
      as="section" // This prop might be specific to your Wrapper component
      id="featured-videos" // Changed id
      className="mb-24 mt-20 text-center md:mb-32" // Standard Tailwind classes
    >
      <motion.div {...getSectionAnimation}>
        <h2 className="heading-secondary mb-12 !text-center">{title}</h2> {/* Assuming heading-secondary is a Tailwind utility or custom class */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {videos.map((video) => (
            <VideoCard key={video.id} {...video} /> // Using VideoCard placeholder
          ))}
        </div>
      </motion.div>
    </Wrapper>
  );
};

export default FeaturedVideos;
