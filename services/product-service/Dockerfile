FROM node:22-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE PORT_NUMBER
CMD ["node", "index.js"]
