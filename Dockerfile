FROM node:12-alpine

WORKDIR /node/app

COPY package.json /node/app/

RUN npm install

COPY . /node/app/


EXPOSE 3000

CMD ["npm", "start"]