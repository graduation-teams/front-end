#!/bin/sh

echo "Switching to branch master"
git checkout master
echo "Building app"
npm run build
echo "Deploying files to server"
rsync -avP build/ deployerfe@techstore.cf:/var/www/techstore.cf/source/
echo "Deployment complete"