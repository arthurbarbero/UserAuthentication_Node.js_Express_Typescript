FROM node:14-alpine
WORKDIR /usr/node/app
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
RUN npm install --production --silent
COPY . .
EXPOSE 3000
RUN chown -R node /usr/node/app/src && chown node /usr/node/app
USER node
CMD ["npm", "start"]
