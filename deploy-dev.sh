#!/bin/sh

echo "Switching to branch master..."
git checkout dev
echo "Discard all changes"
git restore .
echo "Fetching branch..."
git fetch origin
echo "Pulling latest changes"
git pull
echo "install node_modules"
npm install --legacy-peer-deps
echo "Building app"
npm run build
echo "Deployment complete"