import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://8706adb62829ada0dd66e2a6a479a1a3@o4505897577414656.ingest.us.sentry.io/4507085339164672",
  debug: false,
  enabled: process.env.NODE_ENV !== "development",
  tracesSampleRate: 1,
  replaysOnErrorSampleRate: 1.0,
  replaysSessionSampleRate: 0.1,

  integrations: [
    Sentry.replayIntegration({
      maskAllText: true,
      blockAllMedia: true,
    }),
  ],
});
