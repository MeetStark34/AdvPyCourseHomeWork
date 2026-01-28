#!/bin/bash
# ./sync.sh

# Exit immediately if something fails
set -e

PROJECT_DIR="/c/Users/Meet Stark/Documents/AdvPyCourseHomeWork-main"
REPO_URL="https://github.com/MeetStark34/AdvPyCourseHomeWork"
BRANCH="main"

echo "📁 Moving to project directory..."
cd "$PROJECT_DIR"

echo "🔍 Checking git repository..."
git rev-parse --is-inside-work-tree > /dev/null 2>&1 || {
  echo "❌ Not a git repository"
  exit 1
}

echo "🌿 Switching to branch: $BRANCH"
git checkout "$BRANCH"

echo "⬇️ Pulling latest changes..."
git pull origin "$BRANCH" --allow-unrelated-histories

echo "➕ Adding changes..."
git add .

if git diff --cached --quiet; then
  echo "✅ No changes to commit"
else
  COMMIT_MSG="Sync $(date '+%Y-%m-%d %H:%M:%S')"
  echo "📝 Committing: $COMMIT_MSG"
  git commit -m "$COMMIT_MSG"

  echo "⬆️ Pushing to GitHub..."
  git push origin "$BRANCH"
fi
 
echo "🎉 Sync complete"
