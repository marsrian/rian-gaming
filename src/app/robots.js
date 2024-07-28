export default function robots() {
    return {
      rules: {
        userAgent: "*",
        allow: "/",
        disallow: "/private/",
      },
      sitemap: "https://mars-rian-gaming.vercel.app/sitemap.xml",
    };
  }