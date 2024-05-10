FROM node:20-alpine AS build

WORKDIR /app

COPY . .

RUN npm install
RUN npm run build --prod

FROM nginx:alpine

COPY --from=build /app/dist/appointment-app/browser /usr/share/nginx/html

EXPOSE 80