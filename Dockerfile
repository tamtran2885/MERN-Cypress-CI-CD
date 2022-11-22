FROM node:lts-alpine

WORKDIR /app

COPY . .

RUN npm install --only=production

RUN npm run build --prefix frontend

CMD ["npm", "start"]