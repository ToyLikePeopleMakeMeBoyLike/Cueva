// src/app/page.tsx

// import { Layout, Hero, FeaturedVideos } from '../containers'; // Adjusted path
import Hero from '../containers/Hero';
import FeaturedVideos from '../containers/FeaturedVideos';

// Placeholder for Layout component
const Layout = ({ children }: { children: React.ReactNode }) => <main>{children}</main>; // Simple placeholder

// Remove imports for About, Skills, Experience, Projects, Contact if they were here. (Already done as this is a new file)

export default function Home() {
  return (
    <Layout>
      <Hero />
      <FeaturedVideos />
      {/* Add other sections relevant to a streaming platform, e.g.,
          <BrowseByGenre />
          <PopularSeries />
      */}
    </Layout>
  );
}
