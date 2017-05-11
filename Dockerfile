FROM node:6.10.3-wheezy

EXPOSE 3000
EXPOSE 5858

RUN npm install -g nodemon