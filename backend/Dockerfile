FROM node:18

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm install google-auth-library
EXPOSE 5000
CMD ["npm", "start"]

