#!/usr/bin/env sh

# abort on errors
set -e

# build
npm install
npm run build

# place .nojekyll to bypass Jekyll processing
echo > dist/.nojekyll

#git config --global user.email "ci@example.com"
#git config --global user.name "CI"

#git push -f git@github.com:youssefbenlemlih/screen-color.git main:gh-pages
gh-pages -d dist