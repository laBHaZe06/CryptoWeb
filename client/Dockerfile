FROM node:16-alpine

RUN npm install -g nodemon

WORKDIR /app

COPY package.json .

RUN npm install --production --silent

COPY . .

EXPOSE 3000

CMD ["npm","run","start"]