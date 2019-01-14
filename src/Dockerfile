FROM node:8.9.4

WORKDIR /opt/app

COPY *.json ./
RUN npm i

COPY . ./

EXPOSE 3000
CMD [ "npm", "start" ]
