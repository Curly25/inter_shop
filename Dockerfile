FROM node:latest

MAINTAINER vikazh


WORKDIR /var/www
COPY . /var/www

RUN npm install

ENTRYPOINT ["npm", "start"]