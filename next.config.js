/** @type {import('next').NextConfig} */

const { withPlausibleProxy } = require("next-plausible");
const { withSentryConfig } = require("@sentry/nextjs");

module.exports = withPlausibleProxy()(
  withSentryConfig(
    {
      async rewrites() {
        return [
          {
            source: "/downloads/:path*",
            destination:
              "https://gqdzsrtumnxtfwgryfmj.supabase.co/storage/v1/object/public/portfolio/:path*",
          },
          {
            source: "/:path*",
            destination: "/",
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
      disableLogger: true,
      hideSourceMaps: true,
      transpileClientSDK: true,
      widenClientFileUpload: true,
      automaticVercelMonitors: true,
    },
  ),
);
