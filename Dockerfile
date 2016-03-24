FROM node:argon

RUN apt-get install imagemagick

RUN npm install -g grunt
RUN npm install -g grunt-cli

WORKDIR /

EXPOSE 3000

CMD ("grunt")
