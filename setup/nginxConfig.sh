#!/bin/bash
sudo apt update
sudo apt install -y nginx openssl

sudo mkdir -p /opt/orcfax
sudo chmod -R 777 /opt/orcfax
sudo mkdir -p /etc/nginx/sites-enabled
sudo mkdir -p /etc/nginx/sites-available

#Install nginx
sudo apt-get update
sudo apt-get install nginx

#Configure firewall
sudo ufw allow 'Nginx HTTP'

#Kill any left over uwsgi processes
sudo pkill -f uwsgi -9

#Install some dependencies
sudo apt-get update
sudo apt-get install -y nginx openssl
sudo apt-get update
sudo apt-get install -y nginx openssl nodejs npm python3 python3-pip


./deploy.sh
# sudo apt install build-essential checkinstall libssl-dev
# curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.35.1/install.sh | bash

sudo apt install python3

# Install necessities
sudo pip3 install wheel
sudo pip3 install flask
sudo pip3 install uwsgi

uwsgi --ini an.ini -d /opt/orcfax/uwsgi.log

sudo cp docs.orcfax.link /etc/nginx/sites-available/docs.orcfax.link
sudo ln -fs /etc/nginx/sites-available/docs.orcfax.link /etc/nginx/sites-enabled/docs.orcfax.link
sudo systemctl restart nginx
