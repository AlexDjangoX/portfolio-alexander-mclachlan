export default async function sitemap() {
  const routes = [
    {
      url: `https://portfolio-alexander-mclachlan.vercel.app`,
      lastModified: new Date().toISOString(),
    },
  ];

  return [...routes];
}
