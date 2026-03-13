# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What This Is

A GitHub Pages site that publishes AI-generated game research and design blueprints. Built with vanilla HTML/CSS/JS — no build tools.

**Live site:** https://vuhai031194.github.io/claude-code-skills/

## Structure

```
content/
  skills/          ← Skill documentation (markdown)
  blueprints/      ← Published reports and blueprints (markdown)
research/
  markets/         ← Working drafts for market overviews
  blueprints/      ← Working drafts for blueprints
js/
  content-registry.js  ← ALL content must be registered here
  app.js               ← SPA router and markdown renderer
css/
  styles.css
index.html
```

## How to Add Content

1. Write the `.md` file in `content/blueprints/` (or `content/skills/`)
2. Register it in `js/content-registry.js` with slug, title, description, file path, tags, icon
3. Update `README.md` table
4. Commit and push to `main` — GitHub Actions deploys automatically

## Workflow

```bash
# After adding content
git add content/ js/content-registry.js README.md
git commit -m "Add <title>"
git push origin main
```

The `research/` folder holds working drafts. Move finalized drafts to `content/blueprints/` and register them before publishing.

## Tech Stack

- marked.js for markdown rendering
- highlight.js for syntax highlighting
- Hash-based SPA routing (no server needed)
- GitHub Pages + GitHub Actions for deploy
