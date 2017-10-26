FROM node:8-alpine
COPY . /app/
WORKDIR /app
EXPOSE 1293
CMD npm start -s