FROM node:lts-alpine

WORKDIR /app

COPY . .

RUN npm install --only=production

RUN npm run build --prefix frontend

USER node

CMD ["npm", "start", "--prefix", "backend"]