# Portfolio

A fast static portfolio built with [Astro](https://astro.build). No WordPress, no plugins, no database: just Markdown and a few components, built to plain HTML.

## Run it locally

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs static files to dist/
```

## Editing content

| What | Where |
| --- | --- |
| Name, intro, bio, email, social links, portrait | `src/data/site.ts`, `src/assets/portrait.png` |
| Testimonials | `src/data/testimonials.ts` |
| Projects (one file per project) | `src/content/projects/*.md` |
| Colours and fonts | `src/styles/global.css` |

### Adding a project

Create `src/content/projects/my-project.md`:

```md
---
title: My Project
summary: One line on what it is.
depth: case-study                # or 'project' (default) for a short write-up
discipline: ux                   # ux | print | illustration
client: Acme
years: 2024–2025
role: Lead UX designer
team: 2 designers, 1 researcher, 6 engineers
outcome: Support calls down 30%
cover: ./images/my-project.jpg   # optional, path relative to this file
coverAlt: Homepage redesign on desktop and mobile
gallery:                         # optional captioned images shown under the story
  - src: ./images/detail.jpg
    alt: Annotated wireframe of the search flow
    caption: Early wireframe testing goal-based search
order: 1                         # lower shows first
draft: false                     # true hides it
---

The case study, in Markdown. Images: ![Alt](./images/detail.jpg)
```

In-depth case studies get a table of contents and reading time automatically from their `##` headings. Blockquotes starting with **To add:** mark content still to be filled in.

Images placed next to the Markdown are automatically resized and served as modern formats. Projects without a cover get a coloured gradient.

## Contact form

The form posts to any form service set in the `PUBLIC_FORM_ENDPOINT` environment variable, for example a free [Formspree](https://formspree.io) form (`https://formspree.io/f/xxxxabcd`), which emails each submission to you. Add it in Vercel under Project → Settings → Environment Variables and redeploy. Without it, the form opens the visitor's email app instead.

## Deploying on Vercel

Import the repository in Vercel; it detects Astro (build `npm run build`, output `dist`). Add your domain under Project → Settings → Domains. `vercel.json` redirects the old WordPress URLs (`/ux-ui`, `/print`, `/about-neil` …) to the new pages.
