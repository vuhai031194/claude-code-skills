#!/bin/bash
# Sync content from source locations into the site directory
# Run this before deploying to update all skills and blueprints

SITE_DIR="$(cd "$(dirname "$0")" && pwd)"
SKILLS_SRC="$HOME/.claude/commands"
BLUEPRINTS_SRC="$(dirname "$SITE_DIR")/research/blueprints"

echo "Syncing content..."

# Copy skills
if [ -d "$SKILLS_SRC" ]; then
  cp "$SKILLS_SRC"/*.md "$SITE_DIR/content/skills/" 2>/dev/null
  echo "  Skills: $(ls "$SITE_DIR/content/skills/"*.md 2>/dev/null | wc -l | tr -d ' ') files"
fi

# Copy blueprints
if [ -d "$BLUEPRINTS_SRC" ]; then
  cp "$BLUEPRINTS_SRC"/*.md "$SITE_DIR/content/blueprints/" 2>/dev/null
  echo "  Blueprints: $(ls "$SITE_DIR/content/blueprints/"*.md 2>/dev/null | wc -l | tr -d ' ') files"
fi

echo "Done. Open index.html or run: python3 -m http.server 8080 -d $SITE_DIR"
