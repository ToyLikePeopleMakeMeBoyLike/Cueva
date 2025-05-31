// src/app/layout.tsx
import type { Metadata } from 'next';
import { Inter } from 'next/font/google'; // Example font, can be changed
import './globals.css'; // Importing global styles

// Placeholder for Cursor component - will be properly imported in a later step
import Cursor from '../components/ui/Cursor';

const inter = Inter({ subsets: ['latin'] }); // Example font initialization

export const metadata: Metadata = {
  // Metadata will be populated by src/lib/content/platform.ts values later,
  // or directly here if preferred. For now, basic placeholders.
  title: 'StreamUX', // Placeholder, will be dynamic
  description: 'Your go-to platform for UI/UX video streams.', // Placeholder
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Cursor />
        {children}
      </body>
    </html>
  );
}
