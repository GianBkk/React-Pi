FROM node:latest

WORKDIR /node/app

COPY package.json /node/app/

RUN yarn

COPY . /node/app/

EXPOSE 3000

CMD ["yarn", "start"]