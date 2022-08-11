#!/bin/bash
sudo apt install -y nodejs npm
# git pull
cd ..
cd client
npm i
cd ..
cd setup/

sudo cp -R ../client/build/* /usr/share/nginx/html
