import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date('2026-07-30');
  return [
    { url: 'https://www.erlanglabs.com', lastModified, changeFrequency: 'weekly', priority: 1 },
    { url: 'https://www.erlanglabs.com/agent-studio', lastModified, changeFrequency: 'monthly', priority: 0.95 },
    { url: 'https://www.erlanglabs.com/agents', lastModified, changeFrequency: 'monthly', priority: 0.9 },
    { url: 'https://www.erlanglabs.com/knowledge-base', lastModified, changeFrequency: 'monthly', priority: 0.85 },
    { url: 'https://www.erlanglabs.com/agents/lead-qualification', lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://www.erlanglabs.com/agents/customer-feedback', lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://www.erlanglabs.com/agents/recruitment-screening', lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://www.erlanglabs.com/early-access', lastModified, changeFrequency: 'weekly', priority: 0.95 },
    { url: 'https://www.erlanglabs.com/plans', lastModified, changeFrequency: 'monthly', priority: 0.9 },
    { url: 'https://www.erlanglabs.com/contact', lastModified, changeFrequency: 'monthly', priority: 0.6 },
    { url: 'https://www.erlanglabs.com/privacy', lastModified, changeFrequency: 'yearly', priority: 0.3 },
    { url: 'https://www.erlanglabs.com/terms', lastModified, changeFrequency: 'yearly', priority: 0.3 },
  ];
}
