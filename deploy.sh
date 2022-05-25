#!/bin/sh

echo "Switching to branch master..."
git checkout main
echo "Fetching branch..."
git fetch origin
echo "Pulling latest changes"
git pull
echo "install node_modules"
npm install
echo "Building app"
npm run build
echo "Deployment complete"
echo "Discard all changes"
git restore .