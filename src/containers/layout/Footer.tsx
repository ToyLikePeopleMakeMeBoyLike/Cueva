// src/containers/layout/Footer.tsx
'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
// import { getFadeUpAnimation, getSectionAnimation } from '@/styles/animations'; // To be created later
// import { Wrapper, Icon } from '@/components'; // To be created later
import { footerSection } from '../../lib/content/footer';

// Placeholder for Wrapper component
const Wrapper = ({ children, as: Component = 'div', ...props }: any) => <Component {...props}>{children}</Component>;

// Placeholder for Icon component
const Icon = ({ name, ...props }: { name: string, [key: string]: any }) => <span {...props}>{name}</span>; // Simple text placeholder

// Placeholders for animation hooks
const getFadeUpAnimation = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay },
});
const getSectionAnimation = { initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { duration: 0.5 } };


const Footer = () => {
  const { title, links, socials, bottomText } = footerSection;

  return (
    <Wrapper
      as="footer"
      className="bg-background-secondary py-12 text-center text-text-secondary"
      // Assumes bg-background-secondary, text-text-secondary are defined in Tailwind
    >
      <motion.div {...getSectionAnimation} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {title && (
          <motion.h2
            {...getFadeUpAnimation()}
            className="mb-8 text-3xl font-semibold text-text-primary" // Assumes text-text-primary defined
          >
            {title}
          </motion.h2>
        )}

        {links && links.length > 0 && (
          <motion.div
            {...getFadeUpAnimation(0.2)}
            className="mb-8 flex flex-wrap justify-center gap-x-8 gap-y-4"
          >
            {links.map(({ label, url, ariaLabel }) => (
              <Link
                key={label}
                href={url}
                aria-label={ariaLabel}
                className="text-text-secondary transition-colors duration-300 hover:text-accent" // Assumes text-accent defined
              >
                {label}
              </Link>
            ))}
          </motion.div>
        )}

        {socials && socials.length > 0 && (
          <motion.div
            {...getFadeUpAnimation(0.4)}
            className="mb-8 flex justify-center space-x-6"
          >
            {socials.map(({ label, url, icon, ariaLabel }) => (
              <Link
                key={label}
                href={url}
                target="_blank" // Social links usually open in new tab
                rel="noopener noreferrer"
                aria-label={ariaLabel}
                className="text-2xl text-text-secondary transition-colors duration-300 hover:text-accent"
              >
                <Icon name={icon} /> {/* Using placeholder Icon component */}
              </Link>
            ))}
          </motion.div>
        )}

        {bottomText && (
          <motion.p {...getFadeUpAnimation(0.6)} className="text-sm">
            {bottomText}
          </motion.p>
        )}
      </motion.div>
    </Wrapper>
  );
};

export default Footer;
