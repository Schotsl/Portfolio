import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://4d7f3fdcdc3b2d1397e46c7b100f239b@o4505897577414656.ingest.us.sentry.io/4507131816640512",
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
