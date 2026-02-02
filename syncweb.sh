#!/bin/bash
set -e

MAIN_BRANCH="main"

echo "📁 Moving to repo root..."
cd "$(dirname "$0")" || exit 1

echo "🔍 Checking git repo..."
[ -d ".git" ] || { echo "❌ Not a git repo"; exit 1; }

echo "🌿 On branch: $(git branch --show-current)"

echo "⬇️ Fetching remote updates..."
git fetch origin

echo "🔀 Merging latest remote..."
git merge origin/$MAIN_BRANCH --no-edit || {
  echo "⚠️ Resolve merge conflicts manually."
  exit 1
}

echo "➕ Staging everything for web deploy..."
git add -A

if git diff --cached --quiet; then
  echo "✅ Nothing new to deploy"
else
  MSG="Web deploy snapshot $(date '+%Y-%m-%d %H:%M:%S')"
  git commit -m "$MSG"
fi

echo "⬆️ Pushing to GitHub (this triggers Vercel)..."
git push origin $MAIN_BRANCH

echo "🚀 Deployment triggered successfully."
