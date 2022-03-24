FROM node:14-alpine

RUN npm install -g --silent \
    nodemon \
    serverless

WORKDIR /src/

COPY package.json package-lock.json /src/

RUN npm install --silent

COPY . .

CMD npm start