/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  staticPageGenerationTimeout: 300,
  publicRuntimeConfig: {
    NEXT_PUBLIC_NODE_ENV: process.env.NODE_ENV,
    NEXT_PUBLIC_PLASMIC_PREVIEW: process.env.PLASMIC_PREVIEW,
    NEXT_PUBLIC_PLASMIC_PROJECT_ID: process.env.PLASMIC_PROJECT_ID,
    NEXT_PUBLIC_PLASMIC_PROJECT_TOKEN: process.env.PLASMIC_PROJECT_TOKEN,
  },
  eslint: { ignoreDuringBuilds: true },
};

module.exports = nextConfig;

// Don't delete this console log, useful to see the commerce config in Vercel  deployments
console.log("next.config.js", JSON.stringify(module.exports, null, 2));
