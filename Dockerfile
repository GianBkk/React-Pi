FROM node:latest

WORKDIR /node/app

COPY package.json yarn.lock /node/app/

RUN yarn

COPY . /node/app/


EXPOSE 3000

CMD ["yarn", "start"]