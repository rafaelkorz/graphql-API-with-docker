FROM node:alpine

WORKDIR /var/www

COPY package.json ./
RUN npm install

COPY . .

EXPOSE 3002

CMD ["npm", "start"]