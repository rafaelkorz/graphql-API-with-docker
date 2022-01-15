FROM node
COPY . /var/www
WORKDIR /var/www
COPY . .
RUN npm install
EXPOSE 3000
CMD ["npm", "start"]