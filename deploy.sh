#!/bin/sh

echo "Switching to branch master"
git checkout main
echo "install node_modules"
npm install --legacy-peer-deps
echo "Building app"
npm run build
echo "Deploying files to server"
rsync -avP build/ deployerfe@techstore.cf:/var/www/techstore.cf/source/
echo "Deployment complete"