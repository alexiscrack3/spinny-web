FROM node:20.1.0-alpine AS builder

WORKDIR /app

COPY ["package.json", "package-lock.json", "./"]

RUN npm install

COPY . .

RUN npm run build


FROM nginx:1.25.0-alpine

ENV REACT_APP_BASE_URL=$REACT_APP_BASE_URL

RUN echo "Hi==="
RUN echo $REACT_APP_BASE_URL

COPY ./.nginx/nginx.conf /etc/nginx/conf.d/default.conf

## Remove default nginx index page
# RUN rm -rf /usr/share/nginx/html/*

COPY --from=builder /app/build /usr/share/nginx/html

EXPOSE 3000 80

ENTRYPOINT ["nginx", "-g", "daemon off;"]
