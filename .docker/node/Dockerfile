FROM node:lts-alpine

RUN npm install -g http-server

WORKDIR /var/www


# copy project files and folders to the current working directory (i.e. 'app' folder)
COPY . .

# build app for production with minification
#RUN npm run prodM

EXPOSE 3000
CMD [ "http-server","-p3000","./frontend/public"]