# Cactus Design System Workshop

A workshop to learn the [Cactus Design System](https://repaygithub.github.io/cactus/)

## Workshop Setup

Steps to follow before the workshop starts.

1. clone this repository  
  `git clone ssh://github.com/repaygithub/cactus-ds-workshop`

2. navigate into the directory

3. TODO download docker image

## DIY Setup

THESE STEPS ARE FOR POSTERITY ONLY, SKIP AHEAD FOR THE WORKSHOP

1. create project skeleton

```zsh
# make project directory
mkdir cactus-ds-workshop
cd cactus-ds-workshop

# initialize a yarn project with defaults
yarn init -y

# initialize git
git init

# install dependencies
yarn add react react-dom @repay/cactus-web @repay/cactus-icons @repay/cactus-theme @reach/router styled-components

# install dev dependencies
yarn add --dev @repay/scripts prop-types

# add basic files
touch README.md
echo -e "node_modules\ndist\n*.log\n\n.DS_Store" >> .gitignore
echo -e "node_modules" >> .dockerignore
```

2. add project commands

```diff
{
  "name": "cactus-ds-workshop",
  "version": "1.0.0",
  "main": "index.js",
  "license": "MIT",
+  "scripts": {
+    "start": "repay-scripts dev src/index.jsx -p 9000",
+    "build": "repay-scripts build src/index.jsx"
+  },
  "dependencies": {
    "@reach/router": "^1.2.1",
    "@repay/cactus-icons": "^0.6.1",
    "@repay/cactus-theme": "^0.4.4",
    "@repay/cactus-web": "^0.5.3",
    "react": "^16.10.1",
    "react-dom": "^16.10.1",
    "styled-components": "^4.4.0"
  },
  "devDependencies": {
    "@repay/scripts": "^0.3.1",
    "prop-types": "^15.7.2"
  }
}
```

3. Add Dockerfile (see [./Dockerfile](./Dockerfile))

4. push initial commit

```bash
git add .
git commit -m "init project 🌵"
```