# We label our stage as 'builder'
FROM node:8-alpine as builder

COPY package.json ./


## Storing node modules on a separate layer will prevent unnecessary npm installs at each build
RUN yarn && mkdir /ng-app && cp -R ./node_modules ./ng-app

WORKDIR /ng-app

COPY . .
## Build the angular app in production mode and store the artifacts in dist folder
RUN $(npm bin)/ng build --prod --build-optimizer

EXPOSE 4200
CMD ["npm", "start"]
