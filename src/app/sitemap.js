export default function sitemap() {
  const baseUrl = "https://shreesaiestates.co.in";

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}