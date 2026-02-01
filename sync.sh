#!/bin/bash

set -e

MAIN_BRANCH="main"
BACKUP_BRANCH="backup-local"

echo "📁 Moving to repo root..."
cd "$(dirname "$0")" || exit 1

echo "🔍 Checking git repo..."
[ -d ".git" ] || { echo "❌ Not a git repo"; exit 1; }

echo "🌿 Current branch:"
git branch --show-current

echo "➕ Staging all local changes..."
git add -A

if git diff --cached --quiet; then
  echo "✅ No local changes"
else
  COMMIT_MSG="Local autosave $(date '+%Y-%m-%d %H:%M:%S')"
  echo "💾 Saving local snapshot..."
  git commit -m "$COMMIT_MSG"
fi

echo "🧯 Creating safety backup branch..."
git branch "$BACKUP_BRANCH" 2>/dev/null || true
git checkout "$BACKUP_BRANCH"
git merge "$MAIN_BRANCH" --no-edit || true

echo "🌿 Switching back to $MAIN_BRANCH"
git checkout "$MAIN_BRANCH"

echo "⬇️ Fetching remote updates (no overwrite)..."
git fetch origin

echo "🔀 Merging remote safely..."
git merge origin/$MAIN_BRANCH --no-edit || {
  echo "⚠️ Merge conflict — your local work is safe. Resolve manually."
  exit 1
}

echo "⬆️ Pushing main branch..."
git push origin "$MAIN_BRANCH"

echo "⬆️ Updating backup branch..."
git push origin "$BACKUP_BRANCH" --force

echo "🎉 Sync complete. Your work is backed up."
