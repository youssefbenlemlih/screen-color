#!/usr/bin/env sh

# abort on errors
set -e

# build
npm install
npm run build

# navigate into the build output directory
cd dist

# place .nojekyll to bypass Jekyll processing
echo > .nojekyll

git config --global user.email "ci@example.com"
git config --global user.name "CI"

git init
git checkout -B main
git add -A
git commit -m 'deploy'

git push -f git@github.com:youssefbenlemlih/screen-color.git main:gh-pages

cd -