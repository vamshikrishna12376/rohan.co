# Build step
FROM node:18-alpine as build
WORKDIR /app
COPY . .
RUN npm ci && npm run build

# Serve with Nginx
FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
