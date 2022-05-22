#!/bin/sh

echo "Switching to branch master"
git checkout main
echo "Pulling latest changes"
git pull
echo "install node_modules"
npm install --legacy-peer-deps
echo "Building app"
npm run build
echo "Deployment complete"