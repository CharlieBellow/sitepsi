/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || "https://charliepsi.vercel.app",
  generateRobotsTxt: true,
  priority: 0.7,
  changefreq: "weekly",
}
