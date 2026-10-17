# ilnicki.dev

Dominik Ilnicki's personal log. Built with Astro, plain Markdown, and a small stylesheet. Pages and code highlighting are generated at build time. Fonts are supplied by the reader's system; the only browser JavaScript handles the color theme and click-to-load Loom videos.

## Run locally

Use Node.js 24 LTS (`.node-version` is included).

```sh
npm install
npm run dev
```

Open http://localhost:4321. Markdown and style changes appear automatically.

```sh
npm run check   # Check Astro and TypeScript
npm run build   # Generate the static site in dist/
npm run preview # Preview the production build locally
```

## Personal details

Edit `src/config.ts` for your name, introduction, site description, and GitHub/LinkedIn URLs. Empty profile URLs appear as plain placeholder text until you add them.

The domain is set in `astro.config.mjs`. Colors, spacing, and typography are in `src/styles/global.css`.

The header and favicon use `public/cat-logo.gif`, a tightly cropped version of `public/cat.gif` with the original animation timing.

The theme menu offers **System, Light, and Dark**. System follows the device setting; a manual choice is remembered by the browser. Theme changes use a short color transition unless reduced motion is enabled.

## Write an entry

Add `src/content/notes/my-current-workflow.md`:

```markdown
---
title: "My current workflow"
date: 2026-10-10
description: "A short summary for the homepage and link previews."
tags: [ai, workflows]
published: false
---

Your note goes here. A few sentences are enough.

## An optional heading

Longer entries work in the same feed.
```

- The filename becomes the URL: `/notes/my-current-workflow/`.
- Entries are ordered by date, newest first. Dates are displayed in UTC.
- `title` and `date` are required. `description` can be empty or omitted while writing, but is required when publishing. `tags` and `published` are optional.
- Tags use simple names such as `ai`, `tools`, or `ai-coding`. Tag pages are generated automatically. Labels are formatted for reading (for example, `ai-coding-log` becomes **AI coding log**) while URLs keep the original tag names.
- `published: false` entries appear with an **Unpublished** label in `npm run dev`. They are excluded from the deployed site: the feed, article pages, tag pages, and links between entries.
- Omitting `published` has the same effect as `published: false`.
- When ready, set `published: true` and push to the GitHub branch connected to your host.

You can commit and push work in progress with `published: false` while continuing to preview it locally. `npm run build` and `npm run preview` show only published entries, matching the deployed site.

### Code

Use fenced Markdown code blocks with a language, such as `typescript`, `python`, `json`, or `sh`. Syntax highlighting is generated for both color themes at build time.

### Images

Keep images in `src/content/notes/assets/`, and reference them with a relative path:

```markdown
![A description of what the image shows](./assets/my-workflow.png)

*An optional caption.*
```

Astro processes local Markdown images during the build, adds their dimensions to avoid layout shifts, and lazy-loads them. Use descriptive alt text.

### Loom

Add a `loom` block to the entry's frontmatter, using your actual Loom share URL:

```yaml
loom:
  url: "https://www.loom.com/share/YOUR_VIDEO_ID"
  title: "A walkthrough of my workflow"
```

The player appears below the entry. No requests go to Loom until the reader presses play. There is also a normal Loom link, which works without JavaScript. Your video's Loom sharing settings must allow the intended readers to watch it.

For a link anywhere in the text, use a regular Markdown link instead:

```markdown
[Watch the walkthrough](https://www.loom.com/share/YOUR_VIDEO_ID)
```

## Publish with Cloudflare Pages

1. Put this project in a GitHub repository, including `package-lock.json`.
2. In Cloudflare, create a **Pages** project and connect that repository.
3. Select `master` as your production branch and use these settings:
   - **Build command:** `npm run check && npm run build`
   - **Build output directory:** `dist`
   - **Root directory:** the repository root
   - **Environment variable:** `NODE_VERSION=24`
4. Deploy, then add `ilnicki.dev` under the project's **Custom domains** and follow Cloudflare's DNS instructions.

Once connected, pushes to the production branch automatically rebuild the site. Pull requests can receive preview deployments through Cloudflare's GitHub integration.

The output is plain static files and can also be hosted by any static web host. No server or database is required.
