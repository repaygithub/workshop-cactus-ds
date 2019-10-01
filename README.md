# Cactus Design System Workshop

A workshop to learn the [Cactus Design System](https://repaygithub.github.io/cactus/)

## DIY Setup

THESE STEPS ARE FOR POSTERITY ONLY, SKIP AHEAD FOR THE WORKSHOP

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
```