export default function robots() {
  const baseUrl = "https://shreesaiestates.co.in";

  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}