import { MetadataRoute } from 'next';
import fs from 'fs';
import path from 'path';

export default function sitemap(): MetadataRoute.Sitemap {
  const defaultUrl = process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : process.env.NEXT_PUBLIC_SITE_URL
    ? process.env.NEXT_PUBLIC_SITE_URL
    : "http://localhost:3000";

  const appDir = path.join(process.cwd(), 'src', 'app');
  
  function getRoutes(dir: string, currentPath: string = ''): string[] {
    let routes: string[] = [];
    if (!fs.existsSync(dir)) return routes;
    
    const entries = fs.readdirSync(dir, { withFileTypes: true });

    for (const entry of entries) {
      if (entry.isDirectory()) {
        // Ignore api routes and Next.js special folders
        if (entry.name === 'api' || entry.name.startsWith('_') || entry.name.startsWith('(')) continue;
        routes = routes.concat(getRoutes(path.join(dir, entry.name), `${currentPath}/${entry.name}`));
      } else if (entry.isFile() && (entry.name === 'page.tsx' || entry.name === 'page.jsx')) {
        routes.push(currentPath === '' ? '/' : currentPath);
      }
    }
    return routes;
  }

  const routes = getRoutes(appDir);

  return routes.map((route) => ({
    url: `${defaultUrl}${route === '/' ? '' : route}`,
    lastModified: new Date(),
    changeFrequency: route === '/' ? 'yearly' : 'monthly',
    priority: route === '/' ? 1 : 0.8,
  }));
}
