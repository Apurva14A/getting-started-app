# syntax=docker/dockerfile:1

FROM node:18 AS build
WORKDIR /app
COPY package* yarn.lock ./
RUN yarn install
COPY . .

FROM node:18-alpine
COPY --from=build /app /
EXPOSE 3000
CMD ["node", "src/index.js"]

