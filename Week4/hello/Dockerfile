FROM node:8-slim

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY server.js .

CMD [ "npm", "start" ]
