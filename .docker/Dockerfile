FROM node:20.1.0-alpine AS builder

ARG BASE_URL_ARG

ENV REACT_APP_BASE_URL=$BASE_URL_ARG

WORKDIR /app

COPY ["package.json", "package-lock.json", "./"]

RUN npm install

COPY . .

RUN npm run build


FROM nginx:1.25.0-alpine

COPY ./.nginx/nginx.conf /etc/nginx/conf.d/default.conf

## Remove default nginx index page
# RUN rm -rf /usr/share/nginx/html/*

COPY --from=builder /app/build /usr/share/nginx/html

EXPOSE 3000 80

ENTRYPOINT ["nginx", "-g", "daemon off;"]
