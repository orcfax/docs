#!/bin/bash
sudo apt install -y nodejs npm
# git pull
cd ..
cd client
npm i
npm run build
cd ..
cd setup/

sudo cp -R ../client/build/* /usr/share/nginx/html
