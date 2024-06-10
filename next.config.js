/** @type {import('next').NextConfig} */

const { withPlausibleProxy } = require("next-plausible");
const { withSentryConfig } = require("@sentry/nextjs");

const policies = `
  img-src 'self' blob: data: https://avatars.githubusercontent.com;
  font-src 'self';
  base-uri 'self';
  style-src 'self' 'unsafe-inline';
  object-src 'none';
  worker-src 'self' blob:;
  script-src 'self' 'unsafe-eval' 'unsafe-inline';
  default-src 'self' blob: https://api.github.com;
  form-action 'self';
  frame-ancestors 'none';
  upgrade-insecure-requests;
`;

module.exports = withPlausibleProxy({
  customDomain: "https://plausible.hedium.nl",
})(
  withSentryConfig(
    {
      async headers() {
        return [
          {
            source: "/videos/:path*",
            headers: [
              {
                key: "Cache-Control",
                value: "public, max-age=31536000, immutable",
              },
            ],
          },
        ];
      },
      async rewrites() {
        return [
          {
            source: "/downloads/:path*",
            destination:
              "https://gqdzsrtumnxtfwgryfmj.supabase.co/storage/v1/object/public/portfolio/:path*",
          },
          {
            source: "/videos/:path*",
            destination: "https://portfolio-686e22ba.b-cdn.net/:path*",
          },
        ];
      },
    },
    {
      org: "sjors-van-holst-0c97a3b77",
      silent: true,
      release: "1.0.0",
      project: "portfolio",
    },
    {
      tunnelRoute: "/monitoring",
      disableLogger: true,
      hideSourceMaps: true,
      transpileClientSDK: true,
      widenClientFileUpload: true,
      automaticVercelMonitors: true,
    },
  ),
);
