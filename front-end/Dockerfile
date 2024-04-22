FROM node:20.12.0-alpine

WORKDIR /frnt

COPY package.json .

RUN npm install

COPY . .

CMD ["npm", "start", "0.0.0.0:3000"]