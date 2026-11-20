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
| Name, intro, bio, email, social links | `src/data/site.ts` |
| Projects (one file per project) | `src/content/projects/*.md` |
| Colours and fonts | `src/styles/global.css` |

### Adding a project

Create `src/content/projects/my-project.md`:

```md
---
title: My Project
summary: One line on what it is.
year: 2026
role: Design & development
tags: [Web, Branding]
cover: ./images/my-project.jpg   # optional, path relative to this file
coverAlt: Screenshot of the homepage
link: https://example.com        # optional
order: 1                         # lower shows first
---

The case study, in Markdown. Images: ![Alt](./images/detail.jpg)
```

Images placed next to the Markdown are automatically resized and served as modern formats. Projects without a cover get a coloured gradient.

## Deploying

`npm run build` produces a static `dist/` folder that can go on any host. Netlify, Vercel and Cloudflare Pages all detect Astro automatically (build command `npm run build`, output `dist`). Set `site` in `astro.config.mjs` to your domain.
