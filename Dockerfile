FROM node:latest

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

# Install some depenendencies
COPY ./package.json /package.json 
RUN yarn install
RUN yarn global add @vue/cli 
COPY . .

# Uses port which is used by the actual application
EXPOSE 8080
