FROM node:16.14.2-alpine

RUN npm i -g @nestjs/cli@8.0.0

USER node

WORKDIR /home/node/app