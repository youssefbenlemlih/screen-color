#!/usr/bin/env sh

# abort on errors
set -e
# build
npm install
npm run build

# place .nojekyll to bypass Jekyll processing
echo > dist/.nojekyll