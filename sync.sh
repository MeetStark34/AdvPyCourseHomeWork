#!/bin/bash
# ./sync.sh

set -e  # Stop if any command fails

BRANCH="main"

echo "📁 Moving to project directory..."
cd "$(dirname "$0")" || exit 1

echo "🔍 Checking git repository..."
if [ ! -d ".git" ]; then
  echo "❌ Not a git repository. Initialize it first."
  exit 1
fi

echo "🌿 Switching to branch: $BRANCH"
git checkout "$BRANCH"

echo "⬇️ Pulling latest changes..."
git pull origin "$BRANCH"

echo "➕ Adding changes..."
git add .

if git diff --cached --quiet; then
  echo "✅ No changes to commit"
else
  COMMIT_MSG="Sync $(date '+%Y-%m-%d %H:%M:%S')"
  echo "📝 Committing: $COMMIT_MSG"
  git commit -m "$COMMIT_MSG"

  echo "⬆️ Pushing to GitHub..."
  git push
fi

echo "🎉 Sync complete"
