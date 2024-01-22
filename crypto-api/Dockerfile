FROM node:lts-alpine
WORKDIR /usr/src/app

EXPOSE 3000
ENV NODE_ENV=production

COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]

RUN npm install --production --silent && mv node_modules ../

COPY . .

CMD ["npm", "start"]
