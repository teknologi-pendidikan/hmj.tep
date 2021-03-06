/** @type {import('next').NextConfig} */

const ContentSecurityPolicy = `
  default-src 'self';
  script-src 'self' 'unsafe-inline' 'unsafe-eval' *.netlify.com *.googletagmanager.com analytics.google.com;
  img-src 'self' blob: data: https:;
  style-src 'self' 'unsafe-inline';
  connect-src 'self' www.google-analytics.com analytics.google.com stats.g.doubleclick.net api.hmj.tep.my.id hmdtep-api.azurewebsites.net;
  object-src 'none';
  frame-src https://calendar.google.com https://docs.google.com https://www.openstreetmap.org;
`;

securityHeader = [
  {
    key: "X-DNS-Prefetch-Control",
    value: "on",
  },
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  {
    key: "X-XSS-Protection",
    value: "1; mode=block",
  },
  {
    key: "X-Frame-Options",
    value: "SAMEORIGIN",
  },
  {
    key: "Permissions-Policy",
    value: "geolocation=(), interest-cohort=()",
  },
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  {
    key: "Referrer-Policy",
    value: "strict-origin-when-cross-origin",
  },
  {
    key: "Content-Security-Policy",
    value: ContentSecurityPolicy.replace(/\n/g, ""),
  },
];

module.exports = {
  basepath: process.env.BASE_PATH || "",
  assetPrefix: process.env.BASE_PATH || "",
  reactStrictMode: true,
  headers: async () => {
    return [
      {
        source: "/(.*)",
        headers: securityHeader,
      },
    ];
  },
};
