FROM node:18-alpine AS build
WORKDIR /app

COPY package.json ./

RUN npm install 
COPY . .
# Change line 8 in your Dockerfile to this:
# ... (rest of your Dockerfile)
RUN npx ng build --configuration production

FROM nginx:stable-alpine

copy --from=build /app/dist/frontend/browser /usr/share/nginx/html/

RUN rm /etc/nginx/conf.d/default.conf

COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
