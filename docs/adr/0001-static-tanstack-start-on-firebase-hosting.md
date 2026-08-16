# Static TanStack Start on Firebase Hosting

The Personal Archive uses TanStack Start prerendering to generate SEO-ready static HTML for Firebase Hosting. Builds produce both `dist/client` and `dist/server`, but Firebase deploys only `dist/client`; the server bundle exists to support the framework's build and prerender process. This keeps Notes crawlable without requiring a server runtime.
