#!/bin/bash

set -eu

if [ $# != 1 ]; then
  echo "set app name in arg 1"
  exit 1
fi

npx create-react-app $1 --template typescript
cp eslintrc.template.json $1/.eslintrc.json
cp prettierrc.template.json $1/.prettierrc.json
cd $1
echo '.eslintcache' >> .gitignore
yarn add \
  react-router \
  react-router-dom
yarn add -D \
  npm-run-all \
  eslint \
  @typescript-eslint/eslint-plugin \
  @typescript-eslint/parser \
  prettier \
  eslint-config-prettier \
  eslint-plugin-react \
  eslint-plugin-react-hooks \
  eslint-plugin-import \
  eslint-plugin-jsx-a11y \
  @types/react-router \
  @types/react-router-dom
