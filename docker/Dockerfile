FROM node:lts 

WORKDIR /web_api

COPY . .

RUN npm install && npx prisma db push && npx prisma db seed && npx prisma generate



