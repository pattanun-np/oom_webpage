FROM node:9 as builder
RUN mkdir /oomweb
WORKDIR /oomweb
COPY oom-web .

RUN npm install --quiet
RUN npm run build

# Copy built app into nginx container
FROM nginx:1.13.5
COPY --from=builder /oomweb/build /usr/share/nginx/html

EXPOSE 80