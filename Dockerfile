FROM node:9 as builder
RUN mkdir /oom-web
WORKDIR /oom-web
COPY oomweb.

RUN npm install --quiet
RUN npm run build

# Copy built app into nginx container
FROM nginx:1.13.5
COPY --from=builder /oom-web/build /usr/share/nginx/html

EXPOSE 80