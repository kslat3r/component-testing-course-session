FROM node:12.14.0

WORKDIR /opt/app

COPY package.json .
COPY package-lock.json .
RUN npm i

COPY . ./

EXPOSE 3000
CMD [ "npm", "start" ]
