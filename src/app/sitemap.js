export default function sitemap() {
    return [
      {
        url: "https://mars-rian-gaming.vercel.app",
        lastModified: new Date(),
        changeFrequency: "yearly",
        priority: 1,
      },
      {
        url: "https://mars-rian-gaming.vercel.app/gameplay",
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.8,
      },
      {
        url: "https://mars-rian-gaming.vercel.app/blog",
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.8,
      },
    ];
  }