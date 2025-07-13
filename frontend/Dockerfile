FROM node:18

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

RUN npm run build

EXPOSE 3000

# ✅ Force Vite to run on port 3000 and bind to all interfaces
CMD ["npm", "run", "preview", "--", "--host", "--port", "3000"]

