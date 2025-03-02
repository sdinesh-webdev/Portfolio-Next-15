import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "S Dinesh Kumar - Full-stack Developer Portfolio",
    short_name: "SDK Portfolio",
    description: "Portfolio showcasing full-stack development and UI/UX design work by S Dinesh Kumar",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#ffffff",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "192x192",
        type: "image/webp",
      },
      {
        src: "/favicon.ico",
        sizes: "512x512",
        type: "image/webp",
      },
    ],
  };
}
