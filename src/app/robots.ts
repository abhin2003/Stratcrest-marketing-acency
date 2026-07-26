import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const defaultUrl = process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : process.env.NEXT_PUBLIC_SITE_URL
    ? process.env.NEXT_PUBLIC_SITE_URL
    : "http://localhost:3000";

  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${defaultUrl}/sitemap.xml`,
  };
}
