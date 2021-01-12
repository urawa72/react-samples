#!/bin/bash

set -eu

if [ $# != 1 ]; then
  echo "set app name in arg 1"
  exit 1
fi

npx create-react-app $1 --template typescript
cp eslintrc.template.js $1/.eslintrc.js
cp prettierrc.template.js $1/.prettierrc.js
cd $1
echo '.eslintcache' >> .gitignore
yarn add \
  react-router \
  react-router-dom
yarn add -D \
  eslint \
  @typescript-eslint/eslint-plugin \
  @typescript-eslint/parser \
  prettier \
  eslint-config-prettier \
  eslint-plugin-prettier \
  eslint-plugin-react \
  eslint-plugin-react-hooks \
  @types/react-router \
  @types/react-router-dom
