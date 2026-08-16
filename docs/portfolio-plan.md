# Personal Archive — Product Plan

## Purpose

Build a personal, creative space rather than a hiring-focused portfolio. It will bring together creative experiments, a privacy-conscious photography archive, and lightweight notes.

## Experience direction

- Light mode only.
- An artsy indie / psychedelic feel: hazy, analog, and editorial rather than literal beach or travel-postcard imagery.
- Core palette: cream, midnight purple, magenta, burnt orange, and warm accents.
- Square edges and crisp borders, softened by restrained grain, light leaks, and occasional abstract gradients.
- Fraunces for the subtly retro display typography, paired with DM Sans for navigation, captions, and reading text.
- Gentle, playful motion only. It must respect `prefers-reduced-motion` and preserve readable contrast.

## Information architecture

| Route | Purpose |
| --- | --- |
| `/` | A restrained atmospheric intro beside a collage: one dominant visual plus selected Archive, Notes, and Work pieces. |
| `/archive` | A thematic, privacy-safe photo archive. |
| `/notes` | Editorial index of Markdown notes, with featured and smaller entries. |
| `/notes/$slug` | SEO-ready, statically prerendered Markdown note. |
| `/work` | Loose creative lab with featured projects. |
| `/work/$slug` | Short project story: overview, role/tools, images, and links. |
| `/about` | Concise bio and public social links. |

## Content strategy

- Start with three work projects, three archive themes containing about twelve images total, and four notes.
- Use realistic sample copy in local content files, deliberately isolated from layout code: typed TypeScript data for Archive and Work, Markdown for Notes.
- Archive groups use evocative, non-identifying names such as *Soft Focus*, *In Between*, and *After the Sun*; no precise locations, dates, or metadata are published by default.
- Project listing covers use abstract gradient art. Existing project screenshots can be added later inside the story pages.
- Featured notes may have optional artwork; small notes remain text-forward with dates and tags.
- About remains concise. Social links replace a contact form; GitHub is included initially, while other links are added only when verified or supplied. The footer includes a small changing line.

## Interaction and responsive behavior

- Desktop Archive uses deliberately placed collage clusters; mobile falls back to a clean grid.
- Desktop navigation remains minimal; mobile uses an expressive full-screen menu.
- Archive photographs open in a minimal full-screen lightbox with privacy-safe captions.

## Technical foundation

- Latest Vite, React, TypeScript, Tailwind CSS, TanStack Start, and TanStack Router.
- TanStack Start static prerendering is enabled so route HTML and metadata are ready for SEO and Firebase Hosting.
- Markdown will be the publishing format for Notes. Blog links must be discoverable (or explicitly registered) so dynamic note pages are included in prerender output.
- Firebase Hosting is the deployment target. Firebase project-specific configuration is deferred until a project is selected.

## Delivery sequence

1. Build the shared shell, visual tokens, navigation, footer, and responsive foundations.
2. Add local content models and Markdown loading for Notes.
3. Implement Home, Archive, Notes, Work, and About; then the dynamic Note and Work story routes.
4. Add SEO metadata, static-route verification, accessibility and reduced-motion behavior.
5. Add Firebase Hosting configuration once the Firebase project is available; replace placeholders with curated photography and project imagery.
