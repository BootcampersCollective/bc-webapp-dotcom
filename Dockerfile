FROM node:boron

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./
COPY gulpfile.js ./

RUN yarn && yarn global add gulp && gulp
# If you are building your code for production
# RUN npm install --only=production

# Bundle app source
COPY . .

EXPOSE 5000
CMD [ "npm", "start" ]
