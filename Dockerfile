FROM node:14-alpine
ENV NODE_ENV=production
ENV SEQUELIZE_DB_HOST=mysql_db
ENV SEQUELIZE_DB_PORT=3306
ENV SEQUELIZE_DB_USER=node
ENV SEQUELIZE_DB_PASS=node
ENV SEQUELIZE_DB_DIALECT=mysql
ENV SEQUELIZE_DB_DATABASE=node_db
ENV JWT_PASS=HfLM3h^$&3VvK208
WORKDIR /usr/src/app
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
RUN npm install --production --silent && mv node_modules ../
COPY . .
EXPOSE 3333
RUN chown -R node /usr/src/app
USER node
CMD ["npm", "start"]
