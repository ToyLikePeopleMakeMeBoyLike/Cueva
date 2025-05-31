// src/containers/layout/Navbar.tsx
'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link'; // For internal navigation
// import NextLink from 'next/link'; // Used for Button component, aliased if Button is a custom component that takes 'as' prop

// Content imports
import { navbarSection } from '../../lib/content/navbar';
import { platform } from '../../lib/content/platform'; // For platform name if not in navbarSection

// Icon imports (assuming react-icons is or will be a dependency)
import { MdClose } from 'react-icons/md';
import { HiMenuAlt3 } from 'react-icons/hi';

// Placeholder for components that will be created later or assumed to exist
// For now, we'll create simplified versions or stubs for these.
const Wrapper = ({ children, as: Component = 'div', ...props }: any) => <Component {...props}>{children}</Component>;
const NavButton = ({ children, href, ...props }: any) => <Link href={href} {...props}>{children}</Link>; // Simplified
const Button = ({ children, as: Component = 'button', href, ...props }: any) => {
  if (Component === Link && href) { // Crude check for NextLink usage via 'as' prop
    return <Link href={href} {...props}>{children}</Link>;
  }
  return <Component {...props}>{children}</Component>;
};

// Placeholder for DarkModeButton - very basic
const DarkModeButton = () => <button aria-label="Toggle dark mode">DM</button>;

// Placeholder for Sidebar component
const Sidebar = ({ navLinks, cta, onClose }: any) => (
  <motion.div
    initial={{ x: '-100%' }}
    animate={{ x: 0 }}
    exit={{ x: '-100%' }}
    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
    className="fixed inset-y-0 left-0 z-40 w-64 bg-background-secondary p-5 md:hidden" // Tailwind classes
    id="sidebar"
  >
    <button onClick={onClose} className="mb-4 text-2xl"><MdClose /></button>
    <ul className="space-y-4">
      {navLinks.map(({ label, url, ariaLabel }: any) => (
        <li key={label}>
          <NavButton href={url} ariaLabel={ariaLabel} onClick={onClose} className="block text-text-primary hover:text-accent">
            {label}
          </NavButton>
        </li>
      ))}
      {cta && (
        <li>
          <Button as={Link} href={cta.url} aria-label={cta.ariaLabel} onClick={onClose} className="w-full"> {/* Assuming Button can take 'as' and href */}
            {cta.label}
          </Button>
        </li>
      )}
    </ul>
  </motion.div>
);


const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Navbar scroll effect
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const closeSidebar = () => setIsSidebarOpen(false);

  const currentPlatformName = navbarSection.platformName || platform.name;
  const navLinks = navbarSection.navLinks;
  const cta = navbarSection.cta;

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300
                  ${isScrolled ? 'border-transparent-white bg-background/80 backdrop-blur-[50px]' : 'border-transparent'}`}
                  // Assuming bg-background/80 uses a color variable like 'background' from Tailwind config
                  // and 'transparent-white' is also defined.
    >
      <Wrapper
        as="nav"
        className="flex items-center justify-between py-2 text-lg max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" // Added common container styles
      >
        {/* Platform Name / Logo */}
        <Link href="/" aria-label={`Navigate to ${currentPlatformName} home page`}>
          <h1 className="font-bold text-accent">{currentPlatformName}</h1> {/* Assuming text-accent is defined */}
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map(({ label, url, ariaLabel }) => (
            // Not rendering links that require auth for now, as auth is not implemented
            !navbarSection.navLinks.find(nav => nav.label === label)?.authRequired && (
              <li key={label}>
                <NavButton
                  href={url}
                  ariaLabel={ariaLabel}
                  className="text-text-primary transition-colors duration-300 hover:text-accent" // Assuming text-text-primary defined
                >
                  {label}
                </NavButton>
              </li>
            )
          ))}
          {/* Optional CTA Button */}
          {cta && (
            <li>
              <Button
                as={Link} // Instructing Button to render as NextLink
                href={cta.url}
                aria-label={cta.ariaLabel}
                target={cta.openInNewTab ? '_blank' : '_self'}
                className="px-5 py-2 bg-accent text-white rounded hover:bg-accent-dark transition-colors" // Example styling
              >
                {cta.label}
              </Button>
            </li>
          )}
        </ul>

        {/* Mobile Navigation Trigger & Dark Mode Button */}
        <div className="flex items-center gap-2">
          <DarkModeButton />
          <button
            type="button"
            onClick={toggleSidebar}
            aria-expanded={isSidebarOpen}
            aria-controls="sidebar"
            aria-label={isSidebarOpen ? 'Close menu' : 'Open menu'}
            className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-lg text-2xl text-text-primary transition-colors duration-300 hover:bg-background-secondary md:hidden" // Assuming bg-background-secondary defined
          >
            {isSidebarOpen ? <MdClose /> : <HiMenuAlt3 />}
          </button>
        </div>
      </Wrapper>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {isSidebarOpen && (
          <Sidebar
            navLinks={navLinks.filter(link => !link.authRequired)} // Filter out authRequired links for sidebar too
            cta={cta}
            onClose={closeSidebar}
          />
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
