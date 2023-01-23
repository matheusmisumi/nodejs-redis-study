FROM node:16.14.2

WORKDIR /usr/app

COPY package*.json ./

COPY . .

RUN npm run build
RUN npx prisma generate

EXPOSE 3000

CMD ["npm", "run", "dev"]