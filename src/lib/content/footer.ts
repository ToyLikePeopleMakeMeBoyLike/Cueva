// src/lib/content/footer.ts
import { FooterSectionType } from '@/lib/types/sections';

const currentYear = new Date().getFullYear();

export const footerSection: FooterSectionType = {
  title: 'StreamUX',
  links: [
    {
      label: 'FAQ',
      url: '/faq',
      ariaLabel: 'Frequently Asked Questions',
    },
    {
      label: 'Help Center',
      url: '/help',
      ariaLabel: 'Visit help center',
    },
    {
      label: 'Terms of Use',
      url: '/terms',
      ariaLabel: 'Read our terms of use',
    },
    {
      label: 'Privacy Policy',
      url: '/privacy',
      ariaLabel: 'Read our privacy policy',
    },
    {
      label: 'Cookie Preferences',
      url: '/cookies', // Manage cookie settings
      ariaLabel: 'Manage your cookie preferences',
    }
  ],
  socials: [ // Keep your existing social links or update as needed
    {
      label: 'Github',
      url: 'https://github.com/your-profile', // Update if different
      icon: 'Github', // This implies you have an icon mapping or component for 'Github'
      ariaLabel: 'Follow us on Github',
    },
    {
      label: 'Twitter',
      url: 'https://twitter.com/your-profile', // Update if different
      icon: 'Twitter', // This implies you have an icon mapping or component for 'Twitter'
      ariaLabel: 'Follow us on Twitter',
    },
    // Add more socials
  ],
  bottomText: `© ${currentYear} StreamUX. All rights reserved. Created with 💙.`,
};
