FROM node:20-alpine AS build

WORKDIR /app

COPY . .

RUN npm install
RUN npm run build --prod

FROM nginx:alpine

COPY nginx.conf /etc/nginx/conf.d/default.conf

COPY --from=build /app/dist/wuz/browser /usr/share/nginx/html

EXPOSE 80