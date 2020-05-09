
FROM node:10-slim

WORKDIR /root/app

COPY ./src /root/app

RUN npm i -g nodemon

CMD [ "nodemon", "app.js" ]