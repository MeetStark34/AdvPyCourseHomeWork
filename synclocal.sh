#!/bin/bash
set -e

SNAP_BRANCH="local-snapshot"

echo "📁 Moving to repo root..."
cd "$(dirname "$0")" || exit 1

echo "🔍 Checking git repo..."
[ -d ".git" ] || { echo "❌ Not a git repo"; exit 1; }

echo "🌿 Current branch: $(git branch --show-current)"

echo "➕ Staging all changes..."
git add -A

if git diff --cached --quiet; then
  echo "✅ Nothing to snapshot"
  exit 0
fi

MSG="Local snapshot $(date '+%Y-%m-%d %H:%M:%S')"

echo "💾 Creating local snapshot commit..."
git commit -m "$MSG"

echo "🧯 Updating $SNAP_BRANCH backup..."
git branch "$SNAP_BRANCH" 2>/dev/null || true
git checkout "$SNAP_BRANCH"
git merge -X theirs -m "Update snapshot" @{-1} || true

echo "🌿 Returning to previous branch..."
git checkout -

echo "📦 Snapshot saved locally. No deployment triggered."
