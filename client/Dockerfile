# Build Stage
FROM node:18-alpine AS builder
WORKDIR /client
COPY . .
RUN npm i && npm run dev
