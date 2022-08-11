#!/bin/bash
sudo apt install -y nodejs npm
# git pull
cd ..
npm i
npm run packs
npm run build
cd setup/

sudo cp -R ../client/build/* /usr/share/nginx/html