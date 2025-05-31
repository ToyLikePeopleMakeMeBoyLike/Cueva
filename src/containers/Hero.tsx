// src/containers/Hero.tsx
'use client';

import { heroSection } from '@/lib/content/hero';
// The following imports are placeholders for components that will be created later or assumed to exist
// For now, we'll create simplified versions or stubs if these components are critical for Hero.tsx to be valid.
// import { CTA, ShowLottie, Wrapper } from '@/components';
// import { getSectionAnimation } from '@/styles/animations';
import { motion } from 'framer-motion';
import Image from 'next/image'; // If using heroSection.image

// Placeholder for Wrapper component
const Wrapper = ({ children, ...props }: any) => <section {...props}>{children}</section>;
// Placeholder for CTA component
const CTA = ({ children, ...props }: any) => <a {...props}>{children}</a>;
// Placeholder for getSectionAnimation
const getSectionAnimation = { initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { duration: 0.5 } };


const Hero = () => {
  const { subtitle, title, tagline, description, specialText, cta, image } = heroSection;

  return (
    <Wrapper
      as="section" // This prop might be specific to your Wrapper component
      id="hero"
      className="mb-20 mt-24 flex flex-col items-center justify-center text-center md:mb-32 md:mt-36" // Standard Tailwind classes
    >
      <motion.div {...getSectionAnimation}>
        {subtitle && (
          <span className="mb-3 block text-sm font-medium uppercase tracking-widest text-accent"> {/* Assuming text-accent is defined in Tailwind config */}
            {subtitle}
          </span>
        )}
        <h1 className="mb-5 max-w-3xl text-4xl font-extrabold capitalize md:text-6xl">
          {title}
        </h1>
        {tagline && (
          <h2 className="mb-8 max-w-xl text-base text-text-secondary md:text-lg"> {/* Assuming text-text-secondary is defined */}
            {tagline}
          </h2>
        )}
        {description && (
           <p className="mb-8 max-w-2xl text-base text-text-secondary md:text-lg">
            {description}
           </p>
        )}
        {specialText && (
          <p className="mb-10 text-lg font-semibold text-accent md:text-xl">
            {specialText}
          </p>
        )}
        {image && image.src && ( // Display image if provided
          <div className="my-8">
            <Image
              src={image.src}
              alt={image.alt}
              width={800} // Adjust as needed
              height={400} // Adjust as needed
              className="rounded-lg object-cover"
            />
          </div>
        )}
        {cta && (
          <CTA
            // as="link" // This prop might be specific to your CTA component
            href={cta.url}
            aria-label={cta.ariaLabel}
            className="text-lg" // Adjust styling as needed
          >
            {cta.label}
          </CTA>
        )}
      </motion.div>
    </Wrapper>
  );
};

export default Hero;
