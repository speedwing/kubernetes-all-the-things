FROM node:7-slim

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY server.js .
COPY public public

CMD [ "npm", "start" ]
