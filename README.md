# UI/UX Streaming Platform (Formerly Portfolio Website)

This project is a Next.js and Tailwind CSS powered streaming platform focused on UI/UX design content. It allows users to browse and watch videos, series, and categorized content.

## ✨ Features

* **Video Streaming**: Watch UI/UX focused videos and series.
* **Content Categories**: Browse content by specific UI/UX topics.
* **Responsive Design**: Optimized for various screen sizes.
* **Dark Theme**: Utilizes the original sleek dark blue theme.
* **Backend Integration**: (Conceptual) For managing video content, series, seasons, using Bunny.net for video hosting.

## 🚀 Getting Started

### Prerequisites

* Node.js (v18 or later recommended)
* npm or yarn

### Installation

1.  Clone the repository:
    ```bash
    git clone <your-repository-url>
    ```
2.  Navigate to the project directory:
    ```bash
    cd <project-directory>
    ```
3.  Install dependencies:
    ```bash
    npm install
    # or
    yarn install
    ```

### Running the Development Server

```bash
npm run dev
# or
yarn dev
```
Open http://localhost:3000 with your browser to see the result.

🛠️ Key Frontend Files Modified/Created
src/app/page.tsx: Main landing page.
src/components/ui/VideoCard.tsx (formerly ProjectCard.tsx): Displays individual video items.
src/containers/FeaturedVideos.tsx (formerly FeaturedProjects.tsx): Section for trending/featured videos.
src/containers/layout/Navbar.tsx: Site navigation.
src/containers/Hero.tsx: Top hero section of the main page.
Content files in src/lib/content/:
platform.ts: Site metadata and SEO.
navbar.ts: Navigation links.
hero.ts: Hero section content.
featured-videos.ts: Data for featured videos.
footer.ts: Footer content and links.
Type definitions in src/lib/types/.
🔧 Backend Structure (Conceptual - Next.js API Routes)
Database Models (e.g., in src/lib/models/):
Video.ts
Series.ts
Season.ts
Category.ts
API Routes (e.g., in src/pages/api/):
videos/index.ts & videos/[videoId].ts
series/index.ts & series/[seriesId].ts
series/[seriesId]/seasons/index.ts
categories/index.ts
🎨 Styling
The platform retains its original dark blue color scheme, powered by Tailwind CSS.

🤝 Contributing
Contributions are welcome! Please refer to CONTRIBUTING.md for guidelines. (Update this if you wish to keep it).